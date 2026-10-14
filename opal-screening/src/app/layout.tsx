import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { mainNav, simpleNav } from "@/data/nav";
import { site } from "@/data/site";

const archivo = localFont({
  src: [{ path: "./fonts/archivo-wdth.woff2", weight: "100 900", style: "normal" }],
  variable: "--font-archivo",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Opal Screening | DOT Drug Testing, C/TPA & Workplace Screening",
    template: "%s | Opal Screening",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "DOT drug testing",
    "C/TPA",
    "FMCSA drug testing consortium",
    "owner operator drug testing",
    "random consortium",
    "DOT alcohol testing",
    "workplace drug testing",
    "employer drug screening",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0a1124",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${archivo.variable}`}>
      <body>
        <Header nav={mainNav} simple={simpleNav} />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
