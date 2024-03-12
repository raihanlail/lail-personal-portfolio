"use client";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { BiMenu } from "react-icons/bi";
import { Close } from "react-ionicons";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  let [open, setOpen] = useState(false);

  return (
    <header className="z-[999] relative ">
      <motion.div
        className={`fixed top-0  h-[12rem]  w-full border border-[#070F2B] border-opacity-40
        bg-color-primary backdrop-blur-[0.3rem] bg-opacity-80 
         md:h-[4.2rem] ${
          open ? "h-[12rem]" : "h-[4.2rem]"
        }  `}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <nav
          className="fixed top-[0.30rem] sm:h-[initial] h-12 py-[0.8rem] 
             text-color-light  flex flex-row text-sm sm:text-base md:text-lg 
            sm:w-[initial] "
        >
          <div className="flex flex-row w-full justify-between">

          <div className="flex flex-col md:flex-row w-full justify-between">
            <div className=" pl-8 pr-4 sm:pr-8 md:pl-5 text-2xl font-bold hover:text-color-brighter hover:font-extrabold hover:text-[1.6rem] active:text-color-bright active:font-extrabold transition-all">
              <Link href={"/"} onClick={() => setActiveSection("Home")}>
                Raihan
              </Link>
            </div>
            
            <ul
              className={`flex  w-full flex-col  md:flex-row md:z-auto transition-all z-[-1] duration-500 ease-in pl-8  py-2 md:py-0 
            md:ml-[20rem] lg:ml-[35rem] xl:ml-[45rem] 2lg:ml[55rem] 2xl:ml-[60rem]   gap-y-1 ${
              open ? `flex ` : "hidden md:flex"
            }  `}
            >
              {links.map((link) => (
                <li key={link.hash} className=" px-1 py-1 md:py-0 sm:px-4">
                  <Link
                    href={link.hash}
                    onClick={() => setActiveSection(link.name)}
                    className={clsx(
                      "hover:text-color-bright hover:font-bold transition-all",
                      {
                        "text-color-bright font-black":
                          activeSection === link.name,
                      }
                    )}
                  >
                    {link.name}
                    {link.name === activeSection && (
                      <motion.span
                        className="text-color-bright font-color-bold"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
              onClick={() => setOpen(!open)}
              className="text-3xl transition-all absolute text-color-light -right-[14rem] sm:-right-[24rem] cursor-pointer top-3 md:hidden"
            >
              {open ? <IoMdClose /> : <BiMenu />}
            </div>
          </div>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
