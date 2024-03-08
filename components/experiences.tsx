import { experiencesData } from "@/lib/data";
import Image from "next/image";
import React from "react";
import ExperiencesTitle from "./experienceTtile";

const Experiences = () => {
  return (
    <div className="my-16 md:my-32">
      <ExperiencesTitle />
      {experiencesData.map((data, i) => (
        <section
          key={i}
          className="flex flex-col lg:flex-row border border-color-bright rounded-lg transition-all mx-12 my-12"
        >
          <div className="w-full lg:w-2/3 flex flex-col p-8 text-color-light justify-between">
            <div className="flex flex-col text-color-light  ">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold">
                {data.title} at{" "}
                <span className="text-color-bright">{data.location} </span>
              </h1>
            </div>
            <div className="">
              <p className="md:text-xl font-bold"> {data.description}</p>
            </div>
            <div>
              <p>{data.date}</p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col items-center justify-center">
            <div key={i} className="">
              {data.images.map((img, i) => (
                <div
                  key={i}
                  className=" w-96 h-72 overflow-hidden flex items-center justify-center"
                >
                  <Image
                    src={img.image}
                    width={1000}
                    height={1000}
                    alt="img"
                    className="py-8 w-64 sm:w-full lg:w-full max-h-72 overflow-hidden rounded-lg hover:scale-105 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Experiences;
