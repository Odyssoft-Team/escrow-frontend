import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import ClientProvider from "@/components/providers/ClientProvider";
// import { CapacitorStatusBar } from "@/components/CapacitorStatusBar";
// import { BackButtonProvider } from "@/components/providers/BackButtonProvider";

const font_family = Fira_Sans({
  variable: "--font-family",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RentSafe - Escrow Mangement system",
  description: "RentSafe - Escrow Mangement system",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${font_family.variable} antialiased overflow-x-hidden`}>
        {/* <CapacitorStatusBar /> */}
        <ClientProvider />
        {/* <BackButtonProvider> */}
        <Toaster richColors visibleToasts={3} />

        {children}
        {/* </BackButtonProvider> */}
      </body>
    </html>
  );
}
