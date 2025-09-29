import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "next-themes";

const figtree = Figtree({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ralph Dagondon Portfolio",
  description: "Ralph Dagondon's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-[var(--layer-0)] text-[var(--default-font)] ${figtree.className} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
