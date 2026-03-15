import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Sefa Uygun | Portfolio",
  description: "A Full-Stack Developer with React.js, Next.js and Python.",
  keywords: [
    "Next.js",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "Web Development",
    "Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "Full-Stack Developer",
    "Full-Stack Development",
    "Mobile Developer",
    "React Native Developer",
    "Flutter Developer",
    "AI With Python",
    "Software Engineer"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}>
        <Toaster position="top-center" />
        <Navbar />
        {/* Main Content */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
