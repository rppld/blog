import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import { data } from "../data";
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
    <html lang="en" className={mona.variable}>
      <body className="bg-[#f8f8f8] dark:bg-[#181818] antialiased">
        {children}
      </body>
      <Analytics />
    </html>
  );
}
