import { Analytics } from "@vercel/analytics/react";
import { data } from "../data";
import "./globals.css";

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
    <html lang="en">
      <body className="bg-[#f8f8f8] dark:bg-[#181818] antialiased">
        {children}
      </body>
      <Analytics />
    </html>
  );
}
