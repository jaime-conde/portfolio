import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import VisionTrackingSection from "./VisionTrackingSection";
import "./globals.css";
import "./mobile-field.css";
import "./project-heading-fix.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const assetPrefix = process.env.GITHUB_ACTIONS === "true" ? "/portfolio" : "";
const favicon = `${assetPrefix}/favicon-jc.png?v=3`;

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Engineering portfolio of Jaime Conde—computational research, lightweight structures, additive manufacturing, and STEM outreach.",
  icons: {
    icon: favicon,
    shortcut: favicon,
    apple: favicon,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#030812",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <VisionTrackingSection />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-20NWYBJSH4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-20NWYBJSH4');
          `}
        </Script>
      </body>
    </html>
  );
}
