import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { libreBaskerville, storyScript } from "./fonts";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B.Design - Muebles de Melamine a Medida & Diseño de Interiores | Lima, Perú",
  description: "Especialistas en muebles de melamine a medida y diseño de interiores en Lima. Cocinas modulares, closets personalizados, escritorios, reposteros y más. +5 años de experiencia. Atención 24/7.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/favicon.png', type: 'image/png', sizes: '512x512' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
  keywords: [
    "muebles de melamine Lima",
    "diseño de interiores Lima",
    "cocinas a medida Lima",
    "closets personalizados Perú",
    "muebles a medida Lima",
    "carpintería melamine",
    "reposteros Lima",
    "escritorios a medida",
    "amoblado completo Lima",
    "muebles modulares Perú",
    "interiorismo Lima",
    "arquitectura de interiores"
  ],
  authors: [{ name: "B.Design" }],
  creator: "B.Design",
  publisher: "B.Design",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://bdesign.agency",
    siteName: "B.Design",
    title: "B.Design - Muebles de Melamine & Diseño de Interiores | Lima, Perú",
    description: "Especialistas en muebles de melamine a medida y diseño de interiores en Lima. +50 proyectos culminados. Cocinas, closets, escritorios y más.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "B.Design - Diseño de interiores y muebles de melamine en Lima",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B.Design - Muebles de Melamine & Diseño de Interiores | Lima",
    description: "Especialistas en muebles de melamine a medida y diseño de interiores en Lima. +5 años de experiencia.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://bdesign.agency",
  },
  verification: {
    google: "pendiente",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${libreBaskerville.variable} ${storyScript.variable} antialiased flex flex-col min-h-dvh md:min-h-screen`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
