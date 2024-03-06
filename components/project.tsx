"use client";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useTransition } from "react";

type ProjectProps = (typeof projectsData)[number];
function Project({ title, description, tags, source, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className=" group mb-3 sm:mb-10 last:mb-0"
    >
      <section
        className=" bg-color-secondary lg:h-[48vh] cursor-pointer relative max-w-[92rem] my-8 border flex  flex-col bg-opacity-80 rounded-lg  border-color-primary/5
        overflow-hidden mx-4 sm:mx-20  hover:bg-color-bright transition-all"
      >
        <div className="flex flex-col lg:flex-row">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 max-w-full lg:max-w-[50%] flex flex-col h-full  lg:group-even:ml-[36rem]">
            <h3 className="text-2xl   font-semibold">{title}</h3>
            <p className="mt-2 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
            <ul className="flex flex-wrap gap-2  mt-4">
              {tags?.map((tag, i) => (
                <li
                  className="bg-color-primary/[0.7] py-1 px-2 lg:py-2 lg:px-4 text-[0.7rem] lg:text-[0.8rem] hover:bg-color-light hover:text-color-primary hover:font-bold transition-all cursor-pointer tracking-wider rounded-full"
                  key={i}
                >
                  {tag}
                </li>
              ))}
            </ul>
            <p className="text-sm pt-8 lg:pt-16 px-1">Sources:</p>
            <ul className="flex flex-wrap gap-2  mt-4">
              {source?.map((src, i) => (
                <li
                  className="bg-color-primary/[0.7] hover:bg-color-light hover:text-color-primary  lg:text-[0.8rem] hover:font-bold transition-all py-1 px-2 lg:py-2 lg:px-4 text-[0.7rem] tracking-wider rounded-full"
                  key={i}
                >
                  {" "}
                  <a href={src.link} target="blank">
                    {" "}
                    {src.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={imageUrl}
            quality={95}
            className=" lg:absolute top-8 -right-40 w-full h-full 
              lg:w-[42rem] xl:w-[45rem] group-even:right-[initial] 
            group-even:-left-40
            rounded-md shadow-2xl  group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition-all"
            alt={title}
          />
        </div>
      </section>
    </motion.div>
  );
}

export default Project;
