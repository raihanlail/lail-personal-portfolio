import AboutContainer from "@/components/about/aboutContainer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About"
}

const page = () => {
  return (
    <AboutContainer/>
  )
};

export default page;
