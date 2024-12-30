"use client"
import Projects from "@/components/projects/projects";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import Project from "@/components/projects/project";
import ProjectTitle from "@/components/projects/projectTitle";
import Back from "@/components/back/back";

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
    <div className="py-40 sm:py-0" id="Projects">
      <section className="sm:py-[6.6rem]">
        <div className="sm:py-10">

        <ProjectTitle/>
        </div>
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
