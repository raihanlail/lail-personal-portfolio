"use client"
import Projects from "@/components/projects";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import Project from "@/components/project";
import ProjectTitle from "@/components/projectTitle";
import Back from "@/components/back";

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
    <div className="py-32 sm:py-0" id="Projects">
      <section className="sm:py-[6.6rem]">
        <ProjectTitle/>
        <motion.div variants={fadeInAnimationVariants} initial="initial" animate="animate" className="text-color-light py-4">
          {projectsData.map((project, i) => (
            <React.Fragment key={i}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </motion.div>
      </section>
      <Back/>
    </div>
  );
};

export default page;
