"use client";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";


const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  return (
    <header className="z-[999] relative ">
      <motion.div
        className="fixed top-0  h-[3.2rem] sm:h-[4.8rem] w-full border border-[#070F2B] border-opacity-40
        bg-color-primary backdrop-blur-[0.3rem] bg-opacity-80 
         md:h-[4.2rem]  "
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{duration: 0.5}}
      >
        <nav
          className="fixed top-[0.30rem] sm:h-[initial] h-12 py-[0.8rem] 
             text-color-light  flex flex-row text-sm sm:text-base md:text-lg 
            sm:w-[initial] "
        >
          <div className="flex flex-row w-full justify-between">
            <div className=" pl-12 pr-4 sm:pr-8 sm:pl-8 font-bold hover:text-color-bright hover:font-extrabold active:text-color-bright active:font-extrabold transition-all">
              <Link  href={"/"}
               onClick={() => 
                setActiveSection("Home")}>Raihan</Link>
            </div>
            <ul className="flex w-full  md:flex-row ml-4  sm:ml-[12rem] md:ml-[20rem] lg:ml-[40rem] xl:ml-[70rem]   gap-y-1 ">
              {links.map((link) => (
                <li key={link.hash} className=" px-2 sm:px-4">
                  <Link
                    href={link.hash}
                    onClick={() => 
                      setActiveSection(link.name)}
                    className={clsx("hover:text-color-bright hover:font-bold transition-all", {
                      "text-color-bright font-black": activeSection ===
                      link.name,
                    })}
                  >
                    {link.name}
                  {link.name === activeSection && (
                    <motion.span
                    className="text-color-bright font-color-bold"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness:300,
                      damping:30
                    }}>

                    </motion.span>
                  ) }
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
