"use client"
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import React from "react";
import Project from "@/components/projects/project";
const ProjectContainer = () => {
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
        <motion.div variants={fadeInAnimationVariants} initial="initial" animate="animate" className="text-color-light py-4">
        {projectsData.map((project, i) => (
          <React.Fragment key={i}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </motion.div>
      )
}

export default ProjectContainer