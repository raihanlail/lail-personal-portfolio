"use client";

import { introData } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BiArrowToBottom } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaInstagram } from "react-icons/fa";

const defaultAnimations = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  },
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    scale: 1.2,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.3,
      duration: 0.8,
      ease: "easeOut"
    },
  },
};

const ScrollAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.8,
      ease: "easeOut"
    },
  },
};

const transitionValues = {
  duration: 1.2,
  yoyo: Infinity,
  ease: "easeInOut"
};

const Intro = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="Home" className="scroll-mt-[100rem]">
      <motion.div className="flex flex-col  max-w-full  h-[75vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] overflow-hidden transition-all">
        <div>
          {introData.map((intro, i) => (
            <motion.div
              transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
              initial="initial"
              animate="animate"
              variants={fadeInAnimationVariants}
              custom={i}
              key={i}
              className=""
            >
              <div className="items-center  justify-center mt-20 md:mt-36 lg:mt-48 mx-8  text-center">

              <h1 className="text-color-light text-lg">{intro.title}</h1>
              <div className="py-4">
                <h1 className=" text-3xl sm:text-4xl md:text-6xl lg:text-8xl  font-bold text-color-light">
                  {intro.name1}{" "}
                  <span className="text-color-bright ">{intro.name2}</span>{" "}
                  {intro.name3}
                </h1>
              </div>
              <h1 className="text-color-light text-base sm:text-lg lg:text-xl">
                {intro.desc1}
                <span className="text-color-bright px-2 font-bold">
                  {intro.desc2}
                </span>
              </h1>
              <div className="py-6  flex flex-col sm:flex-row w-full sm:items-center sm:justify-center">
                <div className="gap-3 flex flex-col sm:flex-row">
                <Link href={"./about"}>
                    <button
                      className="text-color-light font-extrabold bg-color-bright mx-2 hover:before:bg-color-light row-auto rounded-full relative h-[40px] w-full sm:w-40 overflow-hidden border border-color-primary
                px-3  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-color-light before:transition-all before:duration-700 hover:text-color-primary 
                hover:shadow-color-secondary hover:before:left-0 hover:before:w-full"
                    >
                      <span className="relative z-10">{intro.button2} </span>
                    </button>
                  </Link>
                  <Link href="./CV.pdf" download={true} target="blank">
                    <button
                      className="text-color-primary mx-2 font-extrabold bg-color-light hover:before:bg-color-bright row-auto rounded-full relative h-[40px] w-full sm:w-36 overflow-hidden border border-color-secondary
                px-3  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-color-bright before:transition-all before:duration-700 hover:text-color-light 
                hover:shadow-color-secondary hover:before:left-0 hover:before:w-full"
                    >
                      <span className="relative z-10">{intro.button1}</span>
                    </button>
                  </Link>
                  
                </div>
                <div className="flex px-2 sm:px-0 py-2 sm:py-0 text-xs items-center justify-center md:text-base flex-row">
                  <Link
                    href={intro.linkedin}
                    target="_blank"
                    className="bg-color-light my-2 sm:my-0 transition-all duration-300 w-[40px] sm:w-[initial] hover:bg-color-secondary hover:text-color-light rounded-full mx-2 p-3 "
                  >
                    <BsLinkedin />
                  </Link>
                  <Link
                    href={intro.github}
                    target="_blank"
                    className="bg-color-light my-2 sm:my-0 transition-all duration-300 w-[40px] sm:w-[initial] hover:bg-color-primary hover:text-color-light rounded-full mx-2 p-3 "
                  >
                    <FaGithub />
                  </Link>
                  <Link
                    href={intro.ig}
                    target="_blank"
                    className="bg-color-light my-2 sm:my-0 transition-all duration-300 w-[40px] sm:w-[initial] hover:bg-color-primary hover:text-color-light rounded-full mx-2 p-3 "
                  >
                    <FaInstagram />
                  </Link>
                </div>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div 
        className="text-color-light hidden sm:flex flex-col items-center justify-center -my-16 overflow-hidden cursor-pointer"
        initial="initial"
        animate="animate"
        variants={ScrollAnimationVariants}
        onClick={scrollToNextSection}
        whileHover={{ scale: 1.1, transition: { duration: 0.3, ease: "easeInOut" } }}
        whileTap={{ scale: 0.9, transition: { duration: 0.1, ease: "easeInOut" } }}
      >
        <p className="overflow-hidden">Scroll down</p>
        <BiArrowToBottom/>
      </motion.div>
    </section>
  );
};

export default Intro;
