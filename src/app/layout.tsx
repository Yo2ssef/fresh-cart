import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar/Navbar";
import { Bounce, ToastContainer } from "react-toastify";
import Footer from "@/components/Footer/Footer";
import Provider from "@/components/Provider/Provider";
const inter = Exo({ subsets: ["latin"], variable: "--font-exo" });

export const metadata: Metadata = {
  metadataBase: new URL("https://freshcart-youssef.vercel.app"),
  title: {
    default: "Fresh Cart",
    template: "%s | Fresh Cart"
  },
  description: "Explore the best deals and latest products at Fresh Cart. Fast shipping and high-quality items just a click away.",
  openGraph: {
    title: "Fresh Cart - Shop Now",
    description: "Discover our exclusive collections and the best online shopping experience.",
    url: "https://freshcart-youssef.vercel.app/",
    siteName: "Fresh Cart",
    images: [
      {
        url: "/image/home-slider.png",
        width: 1200,
        height: 630,
        alt: "Fresh Cart Home Slider Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fresh Cart | Shop Online",
    description: "Best deals on all your favorite products.",
    images: ["/image/home-slider.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body suppressHydrationWarning className={`antialiased`}>
        <Provider>
          <Navbar />
          <main className="mb-5">
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={true}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover={false}
              theme="light"
              transition={Bounce}
              limit={3}
            />
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
