import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Project from "./project";
import { motion } from "framer-motion";
import ProjectTitle from "./projectTitle";
import { BiArrowToRight } from "react-icons/bi";

const Projects = () => {
 
  
  return (
    <section className="sm:py-[9.6rem]">
      <ProjectTitle/>
      <div className="text-color-light">
        {projectsData.slice(0, 2).map((project, i) => (
          <React.Fragment key={i}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center justify-center py-6">
        <Link href={"./projects"}>
          <button
            className="text-color-primary mx-2 font-extrabold bg-color-light hover:before:bg-color-secondary row-auto rounded-full relative h-12 w-full sm:w-80  overflow-hidden  
                px-4   transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-color-secondary before:transition-all before:duration-500 hover:text-color-light 
                 hover:before:left-0 hover:before:w-full"
          >
            <span className="relative z-10 text-lg "> See More Of My Projects!  </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
