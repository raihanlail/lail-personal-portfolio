import type { Metadata } from "next";
import photo from "@/public/photo.png";

import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: {
    default: "Home - Raihan Lail Ramadhan",
    template: "%s - Raihan Lail Ramadhan",
  },
  description: "%s",
  keywords: "%s",
  metadataBase: new URL("https://raihan-lail-ramadhan.vercel.app/"),
  twitter: {
    card: "summary_large_image",
    title: "Raihan Lail Ramadhan",
    description: "Full Stack Web Developer",
    site: "https://raihan-lail-ramadhan.vercel.app/",
    images: {
      url: "photo.png",
      width: 1200,
      height: 630,
    },
  },
  authors: [
    {
      name: "Raihan Lail Ramadhan",
      url: "https://raihan-lail-ramadhan.vercel.app/",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://raihan-lail-ramadhan.vercel.app/",
    title: "Raihan Lail Ramadhan",
    description: "Full Stack Web Front-End Developer",
    images: {
      url: "photo.png",
      width: 1200,
      height: 630,
    },
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={` bg-color-primary text-gray-50 relative max-h-[1500px] scroll-smooth `}
      >
        <div
          className="bg-color-secondary absolute top-[-6rem] right-[11rem] h-[31.25rem] -z-10 w-[31.25rem] 
        rounded-full blur-[10rem] sm:w-[68.75 rem] "
        ></div>
        <div
          className="bg-color-primary absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] -z-10 
        rounded-full blur-[10rem] sm:w-[68.75 rem] md:left-[-33rem] lg:left-[-32rem] xl:left-[-24rem] 2xl:left[-12rem] "
        ></div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
