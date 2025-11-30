// components/logo.tsx
import Image from "next/image";
import LogoImage from "@/public/Logo.png";

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export default function Logo({
  className = "h-12 w-auto drop-shadow md:h-14",
  width = 120,
  height = 120,
  priority = false,
}: LogoProps) {
  return (
    <Image
      src={LogoImage}
      alt="Blank Slate Dev logo"
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
