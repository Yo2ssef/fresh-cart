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
  title: "Fresh Cart",
  description: "Create By Youssef",
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
              position="top-center"
              autoClose={5000}
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
