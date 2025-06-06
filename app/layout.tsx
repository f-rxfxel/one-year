import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "faz 1 ano",
  description: "Te amo há (mais de) 1 ano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`antialiased h-screen`}>
      <body>{children}</body>
    </html>
  );
}
