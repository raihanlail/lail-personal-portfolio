import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";




export const metadata: Metadata = {
  title: "Raihan | Personal Portfolio",
  description: "A Junior Front-End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      
      <body className={` bg-color-primary text-gray-50 relative max-h-[1500px] scroll-smooth `}>
        
        <div className="bg-color-secondary absolute top-[-6rem] right-[11rem] h-[31.25rem] -z-10 w-[31.25rem] 
        rounded-full blur-[10rem] sm:w-[68.75 rem] ">

        </div>
        <div className="bg-color-primary absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] -z-10 
        rounded-full blur-[10rem] sm:w-[68.75 rem] md:left-[-33rem] lg:left-[-32rem] xl:left-[-24rem] 2xl:left[-12rem] ">

        </div>
        <Header/>
        {children}
        <Footer/>
        
        </body>
    </html>
  );
}
