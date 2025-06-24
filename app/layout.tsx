import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import DynamicTitle from "./components/DynamicTitle";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  description: "Te namoro há (mais de) 1 ano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`antialiased h-screen overflow-hidden ${poppins.className}`}>
      <body>
        <DynamicTitle />
        {children}
      </body>
    </html>
  );
}
