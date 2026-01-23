import { NextResponse } from "next/server";
import { getBookedDates } from "@/lib/getBookedDates";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const month = searchParams.get("month"); // YYYY-MM

  let range: { from?: string; to?: string } = {};

  if (month) {
    const [y, m] = month.split("-");
    const last = new Date(Number(y), Number(m), 0).getDate();
    range.from = `${y}-${m}-01`;
    range.to = `${y}-${m}-${String(last).padStart(2, "0")}`;
  }

  try {
    const bookedDays = await getBookedDates(range);
    return NextResponse.json({ bookedDays });
  } catch {
    return NextResponse.json({ bookedDays: [] });
  }
}
