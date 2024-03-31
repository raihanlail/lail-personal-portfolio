import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import myanime1img from "@/public/myanime2.png";
import myanime2Img from "@/public/myanime1.png";
import myanime3Img from "@/public/myanime3.png";
import myanime4Img from "@/public/myanime4.png";
import simonev1 from "@/public/simonev1.png"
import simonev2 from "@/public/simonev2.png";
import simonev3 from "@/public/simonev3.png";
import simonev4 from "@/public/simonev4.png";
import khanzaImg from "@/public/khanza.png";
import khanza2 from "@/public/khanza2.png";
import khanza3 from "@/public/khanza3.png";
import khanza4 from "@/public/khanza4.png";
import portoImg from "@/public/porto.png";
import porto2 from "@/public/porto2.png";
import porto3 from "@/public/porto3.png";
import porto4 from "@/public/porto4.png"
import bps1 from "@/public/bps1.png"
import bps2 from "@/public/bps2.png"
import htlb1 from "@/public/hitlab1.png"
import htlb2 from "@/public/hitlab2.png"

export const links = [
 
  {
    name: "About",
    hash: "/about",
  },
  {
    name: "Projects",
    hash: "/projects",
  },
  {
    name: "Skills",
    hash: "/skills",
  },
  {
    name: "Experience",
    hash: "/experiences",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer Intern",
    location: "Badan Pusat Statistik",
    description:
      "In this 1-month internship, me and my team create a web app called SIMONEV to monitor organization activity using Laravel. We learning much about some valuable lessons about team-working, conflict management, and problem solving.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 - Aug 2023",
    images: [
      {
        image: bps1,

      },
      {
        image: bps2,
      }

    ]
  },
] as const;

export const volunteersData = [
  {
    title: "Event Organizer",
    location: "HITLAB 2023",
    description:
      `So happy to be the PIC for the most anticipated learning class in <span class="text-color-bright font-extrabold">HITLAB 2023</span>: Data Science Class. 
      I have gained many new experiences, new friends, new knowledge, and what it's like to work as a team. It's truly an honor to be part of this event.`,
    icon: React.createElement(CgWorkAlt),
    date: "October 2023 - December 2023",
    images: [
      {
        image: htlb1,

      },
      {
        image: htlb2,
      }

    ]
  },
  
] as const;

export const projectsData = [
  {
    id: 1,
    title: "MyAnime",
    description:
      "An anime dictionary website like myanimelist, contains all detail from 1000+ animes. Also the recommendation and searching feature.",
    tags: ["React","JavaScript", "Next.js", "Tailwind", "Jikan API"],
    source: [
      { title: "Github", link: "https://github.com/raihanlail/myanime.git" },
      {
        title: "Live App",
        link: "https://myanime-nine.vercel.app/",
      },
    ],

    imageUrl: myanime1img,
    images: [
      {
        imagelist: myanime1img,
      },
      {
        imagelist: myanime2Img,
      },
      {
        imagelist: myanime3Img,
      },
      {
        imagelist: myanime4Img,
      },
    ],
  },
  {
    id: 2,
    title: "SIMONEV BPS",
    description: "A monitoring app for employee's work in BPS. Monitor performance achievements, budget realization, and visualize them in real-time charts, annually. ",
    tags: ["Laravel", "Jetstream","JavaScript", "Tailwind", "MySQL"],
    source: [
      {
        title: "Github",
        link: "https://github.com/muhasyraf/bps-simonev",
      },
    ],
    
    imageUrl: simonev2,
    images: [
      {
        imagelist:simonev1,
      },
      {
        imagelist:simonev2,
      },
      {
        imagelist: simonev3,
      },
      {
        imagelist: simonev4,
      },
    ],
  },
  {
    id: 3,
    title: "SIMRS KHANZA",
    description: "A hospital admin dashboard to monitoring and managing patients data.",
    tags: ["Laravel", "Inertia", "Vue", "Tailwind", "MySQL"],
    source: [
      {
        title: "Github",
        link: "https://github.com/raihanlail/khanza",
      },
    ],
    link: [""],
    imageUrl: khanzaImg,
    images: [
      {
        imagelist: khanza2,
      },
      {
        imagelist: khanzaImg,
      },
      {
        imagelist: khanza3,
      },
      {
        imagelist: khanza4,
      },
    ],
  },
  {
    id:4,
    title: "Personal Website",
    description:
      "My personal portfolio website. Work on progress",
    tags: ["React","TypeScript", "Next.js", "Tailwind", "Framer Motion"],
    source: [
      { title: "Github", link: "/" },
      {
        title: "Live App",
        link: "/",
      },
    ],

    imageUrl: portoImg,
    images: [
      {
        imagelist: portoImg,
      },
      {
        imagelist: porto2,
      },
      {
        imagelist: porto3,
      },
      {
        imagelist: porto4,
      },
    ],
  },
] as const;

export const introData = [
  {
    title: "Hello, I'm",
    name1: "Raihan",
    name2: "Lail",
    name3: "Ramadhan",
    desc1: "I'm a Junior",
    desc2: "Front-end Web Developer",
    button1: "Download CV ",
    button2: "More About Me ",
    linkedin: "https://www.linkedin.com/in/raihan-lail-ramadhan-750909220/",
    github: "https://github.com/raihanlail",
    ig: "https://www.instagram.com/raihanlail07/"
  },
] as const;




