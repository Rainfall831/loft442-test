"use client";

import { useEffect, useMemo, useState } from "react";

const toMonthKey = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;

export function useBookedDays(monthAnchor: Date) {
  const [set, setSet] = useState<Set<string>>(new Set());
  const month = useMemo(() => toMonthKey(monthAnchor), [monthAnchor]);

  useEffect(() => {
    let cancelled = false;

    fetch(`/api/booked-dates?month=${month}`, { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => {
        if (!cancelled) {
          setSet(new Set(d.bookedDays ?? []));
        }
      });

    return () => {
      cancelled = true;
    };
  }, [month]);

  return set;
}
