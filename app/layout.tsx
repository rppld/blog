import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import { data } from "../data";
import { cn } from "../lib/utils";
import "./globals.css";

const mona = localFont({
  src: "./Mona-Sans.woff2",
  display: "swap",
  variable: "--font-mona",
});

export const metadata = {
  title: data.page.title,
  description: data.page.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        mona.variable,
        "text-base antialiased bg-[#f8f8f8] dark:bg-[#181818]"
      )}
    >
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
