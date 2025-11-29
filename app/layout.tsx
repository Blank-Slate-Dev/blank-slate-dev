// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Blank Slate Dev — We build ideas into products",
  description:
    "We design, build, and launch high-polish web apps for founders and teams. From idea to production.",
  icons: {
    icon: "/BlankSlateLOGO.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0a0a0a]">{children}</body>
    </html>
  );
}
