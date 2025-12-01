// components/hero-spline-macbook.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface HeroSplineMacbookProps {
  src?: string;
}

export default function HeroSplineMacbook({
  src = "https://my.spline.design/macbookwithcode-Xe4xd7M8vkd14o4G8w63yuPl/",
}: HeroSplineMacbookProps) {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <motion.div
      className="relative w-full h-full min-h-[350px] sm:min-h-[400px] lg:min-h-[500px] xl:min-h-[550px]"
      initial={{ opacity: 0, x: 40 }}
      animate={hasLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Subtle placeholder while Spline is loading (no text / spinner) */}
      {!hasLoaded && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-black/90 border border-white/5 shadow-[0_18px_45px_rgba(0,0,0,0.8)] animate-pulse" />
      )}

      <iframe
        src={src}
        frameBorder="0"
        className="absolute inset-0 h-full w-full rounded-2xl"
        allow="fullscreen"
        style={{
          border: "none",
          opacity: hasLoaded ? 1 : 0,
          transition: "opacity 0.6s ease-in-out",
        }}
        onLoad={() => setHasLoaded(true)}
      />
    </motion.div>
  );
}
