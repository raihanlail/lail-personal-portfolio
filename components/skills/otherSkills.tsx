import React from "react";
import { otherSkill, skillsData } from "@/lib/skillsData";
import Image from "next/image";
import SkillsTitle from "./skillsTitle";


const OtherSkills = () => {
  return (
    <div>
      
      <div className="pt-8 mx-4 sm:mx-10 mb-14 ">
        <section className="mx-4  max-w-[96rem]  rounded-md grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 cursor-pointer text-color-light bg-color-secondary border border-color-bright bg-gradient-to-l from-color-primary via-color-primary to-color-secondary  mt-2 sm:mt-4 p-6 ">
          {otherSkill.map((data, i) => (
            <div
              key={i}
              className="px-12 z-10 py-4 hover:scale-105 hover:font-bold  transition-all flex flex-col items-center justify-between"
            >
              <Image src={data.imageUrl} alt="skillsimg" className=" w-16 rounded " />
              <p className="text-sm pt-4 ">{data.title}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default OtherSkills;
