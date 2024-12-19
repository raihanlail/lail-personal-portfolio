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
import vodeco1 from "@/public/vodeco1.png"
import vodeco2 from "@/public/vodeco2.png";
import vodeco3 from "@/public/vodeco3.png";
import vodeco4 from "@/public/vodeco4.png";
import futour from "@/public/futour.png"
import futour1 from "@/public/futour1.png"
import futour2 from "@/public/futour2.png"
import futour3 from "@/public/futour3.png"
import futour4 from "@/public/futour4.png"

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
    title: "FuTour",
    description:
      "An AI travel assistant that helps users to find the best travel destinations on Indonesia.",
    tags: ["Flask","Firestore", "Python", "Tensorflow", "Scikit-learn", "Android Studio", "Google Cloud Platform"],
    source: [
      { title: "Github", link: "https://github.com/FuTour-App/" },
     
    ],

    imageUrl: futour,
    images: [
      {
        imagelist: futour1,
      },
      {
        imagelist: futour2,
      },
      {
        imagelist: futour3,
      },
      {
        imagelist: futour4,
      },
      
    ],
  },
  {
    id: 2,
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
    id: 3,
    title: "Vodeco Clone Website",
    description:
      "A Clone for vodeco website, with functionalities such as login, register, ordering, and mailing",
    tags: ["React","JavaScript", "Next.js", "Tailwind", "Nodemailer"],
    source: [
      { title: "Github", link: "https://github.com/raihanlail/vodeco" },
      
    ],

    imageUrl: vodeco1,
    images: [
      {
        imagelist: vodeco1,
      },
      {
        imagelist: vodeco2,
      },
      {
        imagelist: vodeco3,
      },
      {
        imagelist: vodeco4,
      },
    ],
  },
  {
    id: 4,
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
    id: 5,
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
    id:6,
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
    desc1: "I'm a Full-Stack",
    desc2: "Web Developer",
    button1: "Download CV ",
    button2: "More About Me ",
    linkedin: "https://www.linkedin.com/in/raihan-lail-ramadhan-750909220/",
    github: "https://github.com/raihanlail",
    ig: "https://www.instagram.com/raihanlail07/"
  },
] as const;




