"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface InViewProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
}

export function InView({
  children,
  className,
  threshold = 0.3,
}: InViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
