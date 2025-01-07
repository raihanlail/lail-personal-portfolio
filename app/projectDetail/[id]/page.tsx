import Back from "@/components/back/back";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: number };
}): Promise<Metadata> {
  const { id } = params;
  const project = projectsData[id];
  return {
    title: project.title,
    description: project.description,
    keywords: project.tags.join(", "),
    openGraph: {
      title: project.title,
      description: project.description,
      images: [
        {
          url: project.imageUrl.src,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],    }
  };
}

const Page = ({ params }: { params: { id: number } }) => {
  const { id } = params;
  return (
    <div className=" py-20 sm:py-40 flex flex-col items-center text-center justify-center">
      <h1 className="text-color-light text-4xl">{projectsData[id].title}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 py-12">
        {projectsData[id].images.map((image, i) => (
          <div key={i} className="">
            <Image
              src={image.imagelist}
              alt="img"
              className=" w-80 md:w-96 cursor-pointer hover:scale-105 overflow-hidden transition-all rounded-lg"
            />
          </div>
        ))}
      </div>
      <p className="text-color-light px-2 sm:px-0">
        {projectsData[id].description}
      </p>
      <div className="py-4 flex flex-col items-center justify-center">
        <ul className="flex flex-wrap items-center justify-center gap-2  mt-4">
          {projectsData[id].tags?.map((tag, i) => (
            <li
              className="bg-color-primary/[0.7] py-1 px-2 lg:py-2 text-color-light border border-color-bright lg:px-4 text-[0.7rem] lg:text-[0.8rem] hover:bg-color-light hover:text-color-primary hover:font-bold transition-all cursor-pointer tracking-wider rounded-full"
              key={i}
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex flex-col text-color-light items-center justify-center py-4">
          <h1>Sources:</h1>
          <ul className="flex flex-wrap gap-2  my-2">
            {projectsData[id].source?.map((src, i) => (
              <li
                className="bg-color-primary/[0.7] hover:bg-color-light hover:text-color-primary border border-color-bright text-color-light  lg:text-[0.8rem] hover:font-bold transition-all py-1 px-2 lg:py-2 lg:px-4 text-[0.7rem] tracking-wider rounded-full"
                key={i}
              >
                {" "}
                <Link href={src.link} target="blank">
                  {" "}
                  {src.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Back />
    </div>
  );
};

export default Page;
