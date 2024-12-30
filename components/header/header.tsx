"use client";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const [open, setOpen] = useState(false);

  // Close menu when window is resized to larger screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const nav = document.querySelector("nav");
      if (open && nav && !nav.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  return (
    <header className="z-[999] relative">
      <motion.div
        className={`fixed top-0 left-0 right-0 border border-[#070F2B] border-opacity-40 bg-color-primary backdrop-blur-[0.3rem] bg-opacity-80 shadow-lg transition-all duration-300 ${
          open ? "h-auto pb-4" : "h-[4.2rem]"
        }`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="relative max-w-screen-2xl mx-auto px-4 py-[0.8rem] text-color-light text-sm sm:text-base md:text-lg">
          <div className="flex flex-col md:flex-row items-center md:items-center">
            <Link 
              href="/" 
              onClick={() => {
                setActiveSection("Home");
                setOpen(false);
              }}
              className="text-2xl font-bold hover:text-color-brighter hover:scale-105 active:text-color-bright transition-all duration-200"
            >
              Raihan
            </Link>
            
            <ul className={`flex flex-col md:flex-row md:items-center gap-y-2 md:gap-y-0 md:gap-x-6 w-full md:w-auto mt-4 md:mt-0 md:ml-auto transition-all duration-300 ease-in-out ${
              open ? "flex" : "hidden md:flex"
            }`}>
              {links.map((link) => (
                <li key={link.hash} className="relative">
                  <Link
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setOpen(false);
                    }}
                    className={clsx(
                      "block py-2 px-4 hover:text-color-bright hover:bg-opacity-10 hover:bg-color-bright rounded-md transition-all duration-200",
                      {
                        "text-color-bright font-bold": activeSection === link.name,
                      }
                    )}
                  >
                    {link.name}
                    {link.name === activeSection && (
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-color-bright"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(!open);
            }}
            className="absolute right-4 top-3 md:hidden text-3xl hover:text-color-bright transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <IoMdClose /> : <BiMenu />}
          </button>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
