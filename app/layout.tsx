import type { Metadata } from "next";
import { UbuntuRegular } from "./styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "WRS-TVMEDIA Clone",
  description: "WRS-TVMEDIA Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={UbuntuRegular.className}>{children}</body>
    </html>
  );
}
