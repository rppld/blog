import { pageData } from "../data/page";
import "./globals.css";

export const metadata = {
  title: pageData.title,
  description: pageData.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f8f8f8] antialiased">{children}</body>
    </html>
  );
}