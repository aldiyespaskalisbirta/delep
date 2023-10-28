import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import "./globals.css";

const pt_serif = PT_Serif({ weight: ["400"], preload: false });

export const metadata: Metadata = {
  title: "IYESS | ELEPP",
  description: "This is for my love",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${pt_serif.className} max-h-screen`}>{children}</body>
    </html>
  );
}
