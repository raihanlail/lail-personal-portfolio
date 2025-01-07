import AboutContainer from "@/components/about/aboutContainer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About",
  description: "About Raihan Lail Ramadhan",
  keywords: ["About", "Raihan Lail Ramadhan"],
}

const page = () => {
  return (
    <AboutContainer/>
  )
};

export default page;
