// components/logo.tsx
import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/Blank-slate-dev.png"
      alt="Blank Slate Dev"
      width={320}
      height={72}
      className="h-12 w-auto drop-shadow"
    />
  );
}
