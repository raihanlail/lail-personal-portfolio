"use client"
import React from "react";
import { skillsData } from "@/lib/skillsData";
import Image from "next/image";
import SkillsTitle from "./skillsTitle";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y:50,
  },
  animate:(i: number) => ({
    opacity:1,
    y:0,
    transition:{
      delay:0.02 * 2 * i,
    },
  })
}
const Skills = () => {
  return (
    <div>
      
      <div className="pt-8 mx-4 sm:mx-10 mb-14 ">
        <section className="mx-4  max-w-[96rem]  rounded-md grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 cursor-pointer text-color-light bg-color-primary border border-color-bright bg-gradient-to-r from-color-primary via-color-primary to-color-secondary  bg-opacity-50  mt-2 sm:mt-4 p-6 ">
          {skillsData.map((data, i) => (
            <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{

              once:true,
            }
            }
            custom={i}
              key={i}
              className="px-12 z-10 py-4 hover:scale-105 hover:font-bold  transition-all flex flex-col items-center justify-between"
            >
              <Image src={data.imageUrl} alt="skillsimg" className=" w-16 rounded " />
              <p className="text-sm pt-4 ">{data.title}</p>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Skills;
