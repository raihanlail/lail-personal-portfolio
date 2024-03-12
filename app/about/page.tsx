"use client";
import { motion } from "framer-motion";
import React from "react";
import Jumbotron from "./jumbotron";
import { Content } from "next/font/google";
import ContentData from "./content";
import Line from "./line";
import Experiences from "@/components/experiences";
import SkillsTitle from "@/components/skillsTitle";
import Skills from "@/components/skills";
import Link from "next/link";

const page = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,

      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,

      transition: {
        delay: 0.6,
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      className="h-full"
      variants={fadeInAnimationVariants}
      initial="initial"
      id="About"
      animate="animate"
    >
      <motion.div className="text-color-light flex flex-col items-center overflow-hidden transition-all justify-center h-48 sm:h-56 md:h-64 lg:h-72">
        <h1 className="text-3xl sm:text-6xl font-extrabold">
          About
          <span className="text-color-bright"> Me</span>
        </h1>
      </motion.div>
      <Jumbotron />
      
      <div className=" mx-8 lg:mx-8 my-12">
        <h1 className="text-color-light text-2xl lg:text-5xl py-12 font-extrabold">
          Profile <span className="text-color-light">Summary</span>
        </h1>
        <ContentData />
      </div>
      <Line />
      <Experiences />
      <SkillsTitle />
      <Skills />
      <div className="flex items-center justify-center py-6">
        <Link href={"./projects"}>
          <button
            className="text-color-primary mx-2 font-extrabold bg-color-light hover:before:bg-color-secondary row-auto rounded-full relative h-12 w-full sm:w-80  overflow-hidden  
                px-4   transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-color-secondary before:transition-all before:duration-500 hover:text-color-light 
                 hover:before:left-0 hover:before:w-full"
          >
            <span className="relative z-10 text-lg ">
              {" "}
              See My Projects Here!{" "}
            </span>
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default page;
