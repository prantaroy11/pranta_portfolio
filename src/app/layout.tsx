import type { Metadata } from "next";
import "./globals.css";
import ParticlesBackground from "@/components/ParticlesBackground";

export const metadata: Metadata = {
  title: "Pranta Roy Joy - Full Stack Developer",
  description: "Portfolio of Pranta Roy Joy, Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}
