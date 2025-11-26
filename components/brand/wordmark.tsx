// components/brand/wordmark.tsx
"use client";

import { motion } from "framer-motion";

export default function Wordmark() {
  return (
    <div className="relative">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#B085FF]"
      >
        <span>Blank Slate</span>
        <span>{" "}Dev</span>
      </motion.h1>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-4 h-1 w-32 mx-auto bg-gradient-to-r from-[#604585] via-[#8f6fcc] to-[#c48ef6] rounded-full"
      />
    </div>
  );
}