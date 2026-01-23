"use client";

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type FocusEvent,
} from "react";
import { ChevronDown } from "lucide-react";

type PartyTypeSelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  name: string;
  label: string;
  placeholder?: string;
  error?: string;
  errorId?: string;
  reserveErrorSpace?: boolean;
  onBlur?: () => void;
};

export default function PartyTypeSelect({
  value,
  onChange,
  options,
  name,
  label,
  placeholder = "Select type",
  error,
  errorId,
  reserveErrorSpace = false,
  onBlur,
}: PartyTypeSelectProps) {
  const baseId = useId();
  const labelId = `${baseId}-label`;
  const listboxId = `${baseId}-listbox`;
  const resolvedErrorId = errorId ?? `${baseId}-error`;
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const selectedIndex = useMemo(
    () => options.findIndex((option) => option === value),
    [options, value]
  );

  useEffect(() => {
    if (!open) {
      return;
    }
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
  }, [open, selectedIndex]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, []);

  const moveActive = (delta: number) => {
    if (options.length === 0) return;
    setActiveIndex((prev) => {
      const base = prev >= 0 ? prev : 0;
      return (base + delta + options.length) % options.length;
    });
  };

  const selectValue = (nextValue: string) => {
    onChange(nextValue);
    setOpen(false);
    buttonRef.current?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    switch (event.key) {
      case "ArrowDown": {
        event.preventDefault();
        if (!open) setOpen(true);
        moveActive(1);
        break;
      }
      case "ArrowUp": {
        event.preventDefault();
        if (!open) setOpen(true);
        moveActive(-1);
        break;
      }
      case "Enter":
      case " ": {
        event.preventDefault();
        if (!open) {
          setOpen(true);
          return;
        }
        const option = options[activeIndex];
        if (option) {
          selectValue(option);
        }
        break;
      }
      case "Escape": {
        if (open) {
          event.preventDefault();
          setOpen(false);
        }
        break;
      }
      default:
        break;
    }
  };

  const handleBlur = (event: FocusEvent<HTMLButtonElement>) => {
    if (!wrapperRef.current?.contains(event.relatedTarget as Node)) {
      setOpen(false);
      onBlur?.();
    }
  };

  const displayText = value || placeholder;
  const isPlaceholder = !value;
  const hasError = Boolean(error);

  return (
    <div ref={wrapperRef} className="flex flex-col gap-2">
      <span id={labelId} className="text-xs uppercase tracking-[0.3em] text-white/60">
        {label}
      </span>
      <div className="relative">
        <button
          ref={buttonRef}
          type="button"
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listboxId}
          aria-labelledby={labelId}
          aria-activedescendant={
            open && activeIndex >= 0 ? `${baseId}-option-${activeIndex}` : undefined
          }
          aria-invalid={hasError}
          aria-describedby={hasError ? resolvedErrorId : undefined}
          onClick={() => setOpen((prev) => !prev)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          className={`flex w-full items-center justify-between rounded-sm border bg-black/60 px-4 py-3 text-left text-base text-white/80 transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 focus-visible:shadow-[0_0_12px_rgba(255,255,255,0.2)] sm:text-sm ${
            hasError
              ? "border-rose-200/60 focus-visible:ring-rose-200/40 focus-visible:shadow-[0_0_12px_rgba(251,113,133,0.2)]"
              : "border-white/20 hover:border-white/40"
          }`}
        >
          <span className={isPlaceholder ? "text-white/50" : ""}>{displayText}</span>
          <ChevronDown className={`h-4 w-4 text-white/50 transition ${open ? "rotate-180 text-white/70" : ""}`} />
        </button>
        <div
          id={listboxId}
          role="listbox"
          aria-labelledby={labelId}
          aria-hidden={!open}
          className={`absolute left-0 right-0 z-50 mt-2 max-h-64 overflow-auto rounded-sm border border-white/10 bg-[#070708]/95 p-1 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-md transition duration-150 ease-out motion-reduce:transition-none ${
            open ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-1"
          }`}
        >
          {options.map((option, index) => {
            const isSelected = option === value;
            const isActive = index === activeIndex;
            return (
              <button
                key={option}
                type="button"
                role="option"
                id={`${baseId}-option-${index}`}
                aria-selected={isSelected}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => selectValue(option)}
                className={`flex w-full items-center rounded-sm px-3 py-2 text-sm text-white/80 transition ${
                  isSelected
                    ? "bg-white/12 text-white shadow-[0_0_10px_rgba(255,255,255,0.18)]"
                    : isActive
                    ? "bg-white/8 text-white/90"
                    : "hover:bg-white/8"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
        <input type="hidden" name={name} value={value} />
      </div>
      {reserveErrorSpace || hasError ? (
        <span
          id={resolvedErrorId}
          aria-live="polite"
          className={`min-h-[0.75rem] text-[0.6rem] uppercase tracking-[0.2em] text-rose-200/70 transition ${
            hasError ? "opacity-100" : "opacity-0"
          }`}
        >
          {error ?? ""}
        </span>
      ) : null}
    </div>
  );
}
