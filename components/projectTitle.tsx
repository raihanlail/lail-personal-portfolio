"use client"

import { motion } from 'framer-motion'
import React from 'react'

const ProjectTitle = () => {
    const ScrollAnimationVariants = {
        initial: {
          opacity: 0,
          
          y:100,
        },
        animate: {
          opacity: 1,
          y:0,
         
          
          transition: {
            delay: 0.6,
            duration: 0.5,
          },
        },
      };
  return (
    <motion.div initial="initial"
    animate="animate"
    variants={ScrollAnimationVariants} className="flex pt-2 -mt-20 md:mt-0 items-center justify-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl  text-color-light font-bold">My <span className='text-color-bright font-extrabold'> Projects</span></h1>
    </motion.div>
  )
}

export default ProjectTitle 
