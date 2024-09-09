import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Providers from "@/lib/Providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nihams Ecom Store | Shop Smart, Live Better",
  description:
    "At Nihams Ecom Store, we bring you a diverse range of products designed to enhance your lifestyle. From the latest tech gadgets to stylish home decor, find everything you need in one place. Enjoy exclusive deals, secure shopping, and quick delivery with us.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <>
            <Toaster position="top-right" richColors />
            {children}
          </>
        </body>
      </html>
    </Providers>
  );
}
