import MarqueeRail from "@/components/MarqueeRail";
import { galleryItems } from "@/lib/galleryItems";

const railItems = galleryItems.map(item => ({
  src: item.src,
  alt: item.alt
}));

const railA = railItems;

function RailRow({
  items,
  direction
}: {
  items: { src: string; alt: string }[];
  direction: "left" | "right";
}) {
  return (
    <>
      <div className="sm:hidden pointer-events-none">
        <MarqueeRail items={items} direction={direction} speedSec={100} heightPx={120} gapPx={12} />
      </div>
      <div className="hidden sm:block pointer-events-none">
        <MarqueeRail items={items} direction={direction} speedSec={100} heightPx={176} gapPx={16} />
      </div>
    </>
  );
}

export default function MotionPage() {
  return (
    <div className="min-h-screen bg-[#070708] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
            Motion Rails
          </h1>
          <p className="mt-2 text-sm sm:text-base text-white/70">
            Smooth, GPU-friendly image marquees tuned for iOS Safari.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <RailRow items={railA} direction="left" />
        </div>
      </div>
    </div>
  );
}
