// components/logo.tsx
import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/BlankSlateDevToFillHeader.png"
      alt="Blank Slate Dev"
      width={300}
      height={60}
      className="h-12 w-auto"
    />
  );
}
