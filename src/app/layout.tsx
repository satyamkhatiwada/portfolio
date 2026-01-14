// layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import { Analytics } from "@vercel/analytics/next";
import { GeneralProvider } from "./contexts/generalContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://satyamkhatiwada.com.np"),

  title: {
    default: "Satyam Khatiwada",
    template: "%s | Satyam Khatiwada",
  },

  description:
    "QA Engineer and software enthusiast exploring quality engineering, modern web technologies, and thoughtful digital experiences.",

  keywords: [
    "Satyam Khatiwada",
    "QA Engineer",
    "Quality Assurance",
    "Software Testing",
    "Automation Testing",
    "Frontend Development",
    "Web Development",
    "Tech Blog",
    "Personal Portfolio",
  ],

  creator: "Satyam Khatiwada",
  authors: [{ name: "Satyam Khatiwada" }],

  icons: {
    icon: "/satyam_title.png",
    shortcut: "/satyam_title.png",
    apple: [
      { url: "/satyam_title.png" },
      { url: "/satyam_title.png", sizes: "180x180", type: "image/svg+xml" },
    ],
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://satyamkhatiwada.com.np",
    title: "Satyam Khatiwada | QA Engineer & Software Enthusiast",
    description:
      "Spotify-inspired personal portfolio and blog sharing projects, QA insights, and lessons from building reliable software.",
    siteName: "Satyam Khatiwada",
    images: [
      {
        url: `/satyam_title.png`,
        width: 1200,
        height: 630,
        alt: "Satyam Khatiwada Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Satyam Khatiwada | QA Engineer",
    description:
      "Personal portfolio and blog focused on quality engineering, testing, and modern web development.",
    images: [`/satyam_title.png`],
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

  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />

        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Satyam Khatiwada",
              url: "https://satyamkhatiwada.com.np",
              image: "https://satyamkhatiwada.com.np/satyam_title.png",
              sameAs: [
                "https://www.linkedin.com/in/satyam-khatiwada",
                "https://github.com/satyamkhatiwada",
              ],
              jobTitle: "QA Engineer",
              description:
                "QA Engineer passionate about building reliable software, improving user experience, and sharing knowledge through writing.",
            }),
          }}
        />
      </head>

    <body className={`${inter.className} min-h-screen flex flex-col bg-[#121212] text-white`} suppressHydrationWarning>
        <GeneralProvider>
          <Navigation />
          
          {/* 2. ADDED THE MAIN TAG WITH FLEX-GROW */}
          {/* This pushes the footer down to the very bottom */}
          <main className="flex-grow">
            {children}
          </main>

          {/* 3. ADDED THE FOOTER HERE */}
          <Footer />
          
          <Analytics />
        </GeneralProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}