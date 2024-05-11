import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Providers } from "@/providers";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Games Bell",
  description: "All the games you want in one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="">
        <Providers>
          <Navbar />
          <main className="flex justify-center w-full items-center">
            <div className="px-6 max-w-[1024px] w-full">
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
