// components/spline-showcase.tsx
"use client";

interface SplineShowcaseProps {
  src: string;
  maxWidth?: string;
}

export function SplineShowcase({ src, maxWidth = "700px" }: SplineShowcaseProps) {
  return (
    <div
      className="mx-auto"
      style={{
        width: "100%",
        maxWidth,
      }}
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <iframe
          src={src}
          frameBorder="0"
          className="absolute inset-0 h-full w-full"
          allow="fullscreen"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
}