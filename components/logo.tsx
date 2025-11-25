// components/logo.tsx
import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/Blank-slate-dev.png"
      alt="Blank Slate Dev"
      width={120}
      height={120}
      className="h-12 w-auto drop-shadow md:h-14"
    />
  );
}
