import type { Metadata } from "next";
import { Toaster } from "sonner";
import { VT323, Press_Start_2P } from "next/font/google";
import "./globals.css";

const press_start_2p = Press_Start_2P({
  variable: "--font-press-start-2p",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Caford Chronicles",
  description: "A deep dive into the Caford Chronicles universe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${press_start_2p.variable} ${vt323.variable}`}>
      <body className="dark font-press antialiased">
        {children}
        <Toaster position="bottom-center" richColors />
      </body>
    </html>
  );
}
