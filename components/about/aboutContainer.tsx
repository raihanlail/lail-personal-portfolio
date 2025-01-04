"use client";
import { motion } from "framer-motion";
import React from "react";
import Jumbotron from "./jumbotron";
import { Content } from "next/font/google";
import ContentData from "./content";
import { Metadata } from "next";
import Line from "@/app/about/line";
import Experiences from "@/components/experience/experiences";
import SkillsTitle from "@/components/skills/skillsTitle";
import Skills from "@/components/skills/skills";
import Link from "next/link";

const AboutContainer = () => {
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
          className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={fadeInAnimationVariants}
          initial="initial"
          id="About"
          animate="animate"
        >
          <motion.div className="text-color-light flex flex-col items-center overflow-hidden transition-all justify-center pt-40 pb-6 sm:pt-48 md:pt-56 lg:pt-32">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
              About
              <span className="text-color-bright"> Me</span>
            </h1>
          </motion.div>
          <Jumbotron />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8">
            <h1 className="text-color-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-8 lg:py-12 font-extrabold">
              Profile <span className="text-color-light">Summary</span>
            </h1>
            <ContentData />
          </div>
          <Line />
          <Experiences />
          <SkillsTitle />
          <Skills />
          <div className="flex items-center justify-center py-8 sm:py-10 lg:py-12">
            <Link href={"./projects"}>
              <button
                className="text-color-primary font-extrabold bg-color-light hover:before:bg-color-secondary rounded-full relative h-12 w-full sm:w-64 md:w-72 lg:w-80 overflow-hidden 
                    px-4 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-color-secondary before:transition-all before:duration-500 hover:text-color-light 
                    hover:before:left-0 hover:before:w-full"
              >
                <span className="relative z-10 text-base sm:text-lg">
                  See My Projects Here!
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
      );

}
export default AboutContainer;