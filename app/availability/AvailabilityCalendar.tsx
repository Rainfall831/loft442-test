"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useBookedDays } from "@/lib/useBookedDays";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

const toYMD = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;

export default function AvailabilityCalendar() {
  const today = useMemo(() => new Date(), []);
  const [monthAnchor, setMonthAnchor] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const bookedDays = useBookedDays(monthAnchor);

  const monthLabel = useMemo(() => {
    return monthAnchor.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  }, [monthAnchor]);

  const days = useMemo(() => {
    const start = new Date(monthAnchor.getFullYear(), monthAnchor.getMonth(), 1);
    const end = new Date(
      monthAnchor.getFullYear(),
      monthAnchor.getMonth() + 1,
      0
    );
    const startDay = start.getDay();
    const totalDays = end.getDate();
    const slots = Array.from({ length: startDay + totalDays }, (_, index) => {
      if (index < startDay) {
        return null;
      }
      const day = index - startDay + 1;
      return new Date(monthAnchor.getFullYear(), monthAnchor.getMonth(), day);
    });

    return slots;
  }, [monthAnchor]);

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">
          Select Date
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous month"
            onClick={() =>
              setMonthAnchor(
                new Date(
                  monthAnchor.getFullYear(),
                  monthAnchor.getMonth() - 1,
                  1
                )
              )
            }
            className="rounded-sm border border-white/20 bg-black/60 p-2 text-white/70 transition hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next month"
            onClick={() =>
              setMonthAnchor(
                new Date(
                  monthAnchor.getFullYear(),
                  monthAnchor.getMonth() + 1,
                  1
                )
              )
            }
            className="rounded-sm border border-white/20 bg-black/60 p-2 text-white/70 transition hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="rounded-sm border border-white/10 bg-black/60 p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-base uppercase tracking-[0.35em] text-white/80 sm:text-lg">
            {monthLabel}
          </p>
          {selectedDate ? (
            <span className="text-[0.6rem] uppercase tracking-[0.35em] text-white/50">
              {selectedDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          ) : null}
        </div>
        <div className="grid grid-cols-7 gap-2 text-[0.6rem] uppercase tracking-[0.3em] text-white/40 sm:gap-3 sm:text-[0.65rem]">
          {weekdays.map((day) => (
            <div key={day} className="text-center">
              {day}
            </div>
          ))}
        </div>
        <div
          role="grid"
          aria-label="Choose an availability date"
          className="mt-4 grid grid-cols-7 gap-2 sm:gap-3"
        >
          {days.map((date, index) => {
            if (!date) {
              return (
                <div
                  key={`empty-${index}`}
                  className="h-12 w-12 sm:h-14 sm:w-14"
                />
              );
            }

            const dateKey = toYMD(date);
            const booked = bookedDays.has(dateKey);
            const isSelected =
              !booked && !!selectedDate && isSameDay(selectedDate, date);
            const isToday = isSameDay(today, date);
            const stateClass = booked
              ? "border-white/10 bg-black/70 text-white/25 opacity-70 cursor-not-allowed"
              : isSelected
                ? "border-white/60 bg-white/10 text-white shadow-[0_0_18px_rgba(255,255,255,0.2)]"
                : "border-white/10 text-white/70 hover:border-white/40 hover:text-white";

            return (
              <button
                key={dateKey}
                type="button"
                role="gridcell"
                aria-disabled={booked}
                aria-selected={isSelected}
                disabled={booked}
                onClick={booked ? undefined : () => setSelectedDate(date)}
                className={`flex h-12 w-12 flex-col items-center justify-center gap-0.5 rounded-sm border text-[0.7rem] uppercase tracking-[0.3em] leading-none transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50 sm:h-14 sm:w-14 sm:text-sm ${stateClass} ${
                  !booked && isToday ? "border-white/30 text-white/90" : ""
                }`}
              >
                <span className="leading-none">{date.getDate()}</span>
                {booked ? (
                  <span className="mt-0.5 text-[0.45rem] uppercase tracking-[0.35em] text-white/35">
                    Booked
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-[0.6rem] uppercase tracking-[0.35em] text-white/50">
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-sm border border-white/20 bg-black/60" />
            Available
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-sm border border-white/10 bg-black/70" />
            Booked
          </span>
        </div>
      </div>
    </div>
  );
}
