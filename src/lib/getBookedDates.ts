import { sanity } from "./sanityClient";

const YMD_RE = /^\d{4}-\d{2}-\d{2}$/;
const CANCELLED_STATUSES = new Set(["cancelled", "canceled"]);
const VENUE_TIMEZONE = "America/New_York";

type DateValue =
  | string
  | { start?: string; end?: string; status?: string }
  | null;

const formatYmdInTimeZone = (date: Date) => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: VENUE_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const year = parts.find((p) => p.type === "year")?.value ?? "0000";
  const month = parts.find((p) => p.type === "month")?.value ?? "00";
  const day = parts.find((p) => p.type === "day")?.value ?? "00";

  return `${year}-${month}-${day}`;
};

const normalizeDateValue = (value: DateValue): string[] => {
  if (!value) return [];

  if (typeof value === "string") {
    return YMD_RE.test(value) ? [value] : [];
  }

  if (typeof value === "object") {
    const status = value.status?.toLowerCase();
    if (status && CANCELLED_STATUSES.has(status)) return [];

    if (value.start && YMD_RE.test(value.start)) {
      return [value.start];
    }
    if (value.end && YMD_RE.test(value.end)) {
      return [value.end];
    }
  }

  return [];
};

export async function getBookedDates(range?: {
  from?: string;
  to?: string;
}): Promise<string[]> {
  const data = await sanity.fetch<DateValue[]>(
    `*[_type == "availability"]|order(_updatedAt desc)[0].bookedDates`
  );

  const entries = Array.isArray(data) ? data : [];
  const days = entries.flatMap(normalizeDateValue);

  const unique = Array.from(new Set(days)).sort();

  if (!range?.from && !range?.to) return unique;

  return unique.filter(
    (d) => (!range.from || d >= range.from) && (!range.to || d <= range.to)
  );
}
