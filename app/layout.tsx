import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google'
import "./globals.css";

const font = Plus_Jakarta_Sans({
  weight: '400',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Kerubin Capital",
  description: "Investing in a Sustainable Future, Investing in Women",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
