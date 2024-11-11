import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import Header from "@/components/layouts/header";
import Sidebar from "@/components/layouts/Sidebar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <Provider>
      <Header />
      <div className="grid grid-cols-10 ">
        <div className="col-span-2 border-r-2 border-gray-100">
          <Sidebar />
        </div>
        <div className="col-span-8 text-black  ">
          {children}
        </div>
      </div>
    </Provider>
    </body>
    </html>
  );
}