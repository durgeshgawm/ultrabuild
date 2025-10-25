import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export const metadata: Metadata = {
  title: "UltraBuild Satna",
  description: "Official website of UltraBuild Satna — Building the future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}