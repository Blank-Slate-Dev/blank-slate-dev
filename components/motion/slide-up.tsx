"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
  ease?: number[] | string;
  scaleFrom?: number;
}

export function SlideUp({
  children,
  delay = 0,
  duration = 0.5,
  distance = 20,
  ease = [0.22, 1, 0.36, 1],
  scaleFrom = 1,
  className,
}: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance, scale: scaleFrom }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration,
        delay,
        ease,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}