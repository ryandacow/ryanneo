import { Inter } from "next/font/google";
import { Playwrite_IT_Moderna } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const eb_garamond = Inter({
  variable: "--font-eb_garamond", // Defines a CSS variable for use in CSS
  subsets: ["latin"],
  weight: [ "500", "600"], // Adjust weights as needed
});

const playwriteFont = Playwrite_IT_Moderna({
  variable: "--font-playwrite", // Define CSS variable
  subsets: ["latin"],
  weight: ["400", "100", "200", "300"],
});

export const metadata = {
  title: "Ryan Neo | Portfolio",
  description: "Showcasing my projects in data science, AI, and full-stack development.",
  keywords: "portfolio, data science, AI, web development",
  openGraph: {
    title: "Ryan Neo | Portfolio",
    description: "Check out my projects in data science, AI, and full-stack development.",
    url: "https://myportfolio.com",
    siteName: "Ryan Neo Portfolio",
    images: [
      {
        url: "https://myportfolio.com/preview.jpg", // Thumbnail when shared on social media
        width: 1200,
        height: 630,
        alt: "Ryan Neo Portfolio Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${eb_garamond.variable} ${playwriteFont.variable}`}>
      <body className="bg-[#f6ede6] w-full min-h-screen overflow-x-hidden antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
