/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/redux/provider/ReduxProvider";
import { Toaster } from "sonner";
import { Navbar } from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";


export const metadata: Metadata = {
  title: "Kiks",
  // description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={metadata.description ?? ""} />
        {/* Google Fonts for Inter */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
        />
      </head>
      <body className="antialiased font-inter">
        <Toaster position="bottom-right" richColors />
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
