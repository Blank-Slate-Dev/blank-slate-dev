"use client";

import Link from "next/link";
import { useState } from "react";
import { DecodingText } from "./decoding-text";

export default function HeroContactLink() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Link
      href="/contact"
      className="matrix-button relative inline-flex h-7 w-28 items-center justify-center overflow-hidden rounded-none px-3 text-[0.4375rem] font-semibold uppercase tracking-[0.24em] text-[#f5f7ff] transition duration-200 ease-out focus-visible:outline-none"
      role="button"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
    >
      <DecodingText fromText="CONTACT A DEV" toText="LETS BUILD" isActive={isActive} />
    </Link>
  );
}
