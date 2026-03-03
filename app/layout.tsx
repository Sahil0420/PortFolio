import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sahil Chandel — Full-Stack Developer & Systems Architect",
  description:
    "Portfolio of Sahil Kumar — building high-performance web applications, distributed systems, and developer tooling. Next.js, Go, Python, TypeScript.",
  keywords: [
    "Full-Stack Developer",
    "Systems Architect",
    "Next.js",
    "TypeScript",
    "Go",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
