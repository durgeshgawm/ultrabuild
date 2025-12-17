import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "UltraBuild Satna | Leading Construction Company",
  description: "Official website of UltraBuild Satna — Building the future with excellence in construction and infrastructure development.",
  icons: {
    icon: [
      { url: '/favicoun-logo.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/favicoun-logo.jpg', sizes: '16x16', type: 'image/jpeg' },
    ],
    apple: '/favicoun-logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}