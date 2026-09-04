import Image from "next/image";
import { BatteryFull, Signal, Wifi } from "lucide-react";

interface DeviceFrameProps {
  image: string;
  alt: string;
}

export default function DeviceFrame({ image, alt }: DeviceFrameProps) {
  return (
    <div className="relative mx-auto w-[280px] select-none">
      {/* Side buttons */}
      <div
        aria-hidden
        className="absolute left-[-3px] top-[88px] h-7 w-[3px] rounded-l-sm bg-zinc-400 dark:bg-zinc-600"
      />
      <div
        aria-hidden
        className="absolute left-[-3px] top-[128px] h-12 w-[3px] rounded-l-sm bg-zinc-400 dark:bg-zinc-600"
      />
      <div
        aria-hidden
        className="absolute left-[-3px] top-[172px] h-12 w-[3px] rounded-l-sm bg-zinc-400 dark:bg-zinc-600"
      />
      <div
        aria-hidden
        className="absolute right[-3px] top-[148px] h-16 w-[3px] rounded-r-sm bg-zinc-400 dark:bg-zinc-600"
      />

      {/* Titanium-style chassis */}
      <div
        className="
          relative
          rounded-[2.75rem]
          border
          border-zinc-300/80
          bg-gradient-to-b
          from-zinc-100
          via-zinc-200
          to-zinc-300
          p-[3px]
          shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)]
          dark:border-zinc-600/80
          dark:from-zinc-700
          dark:via-zinc-800
          dark:to-zinc-900
        "
      >
        {/* Frame highlight */}
        <div
          aria-hidden
          className="
            pointer-events-none
            absolute
            inset-x-4
            top-1
            h-px
            rounded-full
            bg-white/70
            dark:bg-white/20
          "
        />

        {/* Inner bezel */}
        <div className="rounded-[2.6rem] bg-black p-[6px]">
          {/* Screen */}
          <div className="relative overflow-hidden rounded-[2.1rem] bg-black">
            <Image
              src={image}
              alt={alt}
              width={400}
              height={800}
              className="h-auto w-full"
            />

            {/* Status bar overlay */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 bg-gradient-to-b from-black/45 to-transparent px-5 pb-8 pt-3">
              <div className="relative flex items-center justify-between text-white">
                <span className="text-[11px] font-semibold tracking-tight">
                  9:41
                </span>

                <div className="flex items-center gap-1.5">
                  <Signal className="h-3 w-3" strokeWidth={2.5} />
                  <Wifi className="h-3 w-3" strokeWidth={2.5} />
                  <BatteryFull className="h-3.5 w-4" strokeWidth={2.5} />
                </div>
              </div>
            </div>

            {/* Dynamic Island */}
            <div
              aria-hidden
              className="
                pointer-events-none
                absolute
                left-1/2
                top-2.5
                z-20
                h-[26px]
                w-[96px]
                -translate-x-1/2
                rounded-full
                bg-black
                shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_4px_12px_rgba(0,0,0,0.45)]
              "
            >
              <div className="absolute left-3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-zinc-900 ring-1 ring-zinc-700/80" />
            </div>

            {/* Home indicator */}
            <div
              aria-hidden
              className="
                pointer-events-none
                absolute
                bottom-2
                left-1/2
                z-10
                h-[4px]
                w-[108px]
                -translate-x-1/2
                rounded-full
                bg-white/35
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
