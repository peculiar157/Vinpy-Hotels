import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Vinpy Hotels",
    default: "Vinpy Hotels — Your Comfort, Our Priority",
  },
  description:
    "An exquisitely finished boutique hotel in the heart of Uyo, Akwa Ibom State. 38 rooms, indoor pool, rooftop bar, event halls and more.",
  keywords: ["Vinpy Hotels", "hotel Uyo", "Akwa Ibom hotel", "boutique hotel Nigeria"],
  openGraph: {
    type: "website",
    siteName: "Vinpy Hotels",
    title: "Vinpy Hotels — Your Comfort, Our Priority",
    description: "Boutique hotel in Uyo, Akwa Ibom. Pool, restaurant, rooftop bar, event halls.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
