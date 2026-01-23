import Link from "next/link";
import AvailabilityCalendar from "./AvailabilityCalendar";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

const contactNumber = "555-123-4420";
const contactEmail = "events@loft442.com";

export default async function AvailabilityPage() {
  return (
    <main className="ambient-surface bg-black pt-[76px] text-white">
      <div className="ambient-glow" aria-hidden="true">
        <span className="ambient-glow__layer" />
      </div>
      <div className="divider-glow h-[2px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <section className="relative overflow-hidden border-b border-white/10 bg-black">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,_rgba(255,255,255,0.05),_transparent_45%)]" />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 sm:py-10 md:py-12">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            Loft 442
          </p>
          <h1 className="text-3xl font-semibold tracking-[0.35em] text-white sm:text-4xl md:text-5xl">
            CHECK AVAILABILITY
          </h1>
          <p className="max-w-xl text-sm text-white/70">
            Review open dates and start your booking request.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8">
          <Reveal className="flex w-full flex-col gap-3">
            <span className="text-[0.6rem] uppercase tracking-[0.35em] text-white/60">
              Step 1 of 2
            </span>
            <div className="relative h-[10px] w-full">
              <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/15" />
              <div className="absolute left-0 top-1/2 h-px w-1/2 -translate-y-1/2 bg-white/60 shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
              <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-white/60 bg-white/40 shadow-[0_0_10px_rgba(255,255,255,0.25)]" />
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-white/20 bg-black" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-black pb-20 pt-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="gallery-card group relative grid gap-10 overflow-hidden rounded-sm border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition duration-200 ease-out hover:border-white/20 sm:p-8 lg:grid-cols-[1.1fr_1fr]">
            <span className="gallery-shine" aria-hidden="true" />
            <div className="relative z-10">
              <AvailabilityCalendar />
            </div>
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                  Request Booking
                </p>
                <p className="text-sm text-white/70">
                  Share your preferred dates and guest count, and our team will
                  follow up within 24 hours.
                </p>
                <div className="flex flex-col gap-3 text-[0.65rem] uppercase tracking-[0.35em] text-white/80">
                  <a
                    href={`tel:${contactNumber}`}
                    className="rounded-sm border border-white/20 bg-black/60 px-4 py-3 text-white/80 transition hover:border-white/40 hover:text-white motion-reduce:transition-none"
                  >
                    Call / Text
                  </a>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="rounded-sm border border-white/20 bg-black/60 px-4 py-3 text-white/80 transition hover:border-white/40 hover:text-white motion-reduce:transition-none"
                  >
                    Email
                  </a>
                </div>
              </div>
              <div className="mt-auto flex justify-center lg:justify-end">
                <Link
                  href="/booking"
                  className="cta-button bg-white px-6 py-3 text-[0.65rem] uppercase tracking-[0.35em] text-black transition hover:opacity-90"
                >
                  Request Booking
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
