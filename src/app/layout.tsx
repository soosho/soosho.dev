import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClickSpark from "@/components/ClickSpark";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://soosho.dev'),
  title: "Soosho | Digital Architect & Full-Stack Engineer",
  description: "Boutique digital craftsmanship for solo entrepreneurs and corporations. Architecting high-performance blockchain ecosystems and scalable web systems since 2015.",
  keywords: ["Soosho", "Digital Architect", "Full-Stack Engineer", "Blockchain Consensus", "Next.js", "Revenue Sharing Models", "Web3 Infrastructure"],
  authors: [{ name: "Soosho" }],
  icons: {
    icon: "/logo.png",
  },
  verification: {
    google: "CshsylictYm1g1bLE3BXp-hlfaTGQLxA9vUBjbjjOgE",
  },
  openGraph: {
    title: "Soosho | Digital Architect & Full-Stack Engineer",
    description: "Architecting high-performance blockchain ecosystems and scalable web systems since 2015.",
    url: "https://soosho.dev",
    siteName: "Soosho Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Soosho | Digital Architect Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soosho | Digital Architect & Full-Stack Engineer",
    description: "Architecting high-performance blockchain ecosystems and scalable web systems since 2015.",
    creator: "@soosho_dev",
    images: ["/og.png"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${outfit.variable}`}>
        <ClickSpark
          sparkColor='#a855f7'
          sparkSize={12}
          sparkRadius={20}
          sparkCount={10}
          duration={500}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ClickSpark>
      </body>
    </html>
  );
}
