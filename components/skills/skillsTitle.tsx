"use client"

import { motion } from 'framer-motion'
import React from 'react'

const SkillsTitle = () => {
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
    <motion.div  className="flex  items-center justify-center mx-16 sm:mx-0">
      <h1 className="text-4xl sm:text-5xl md:text-6xl  text-color-light font-bold">My <span className='text-color-bright font-extrabold'> Tools </span> and
      <span className='font-extrabold text-color-brighter'> Skills </span> </h1>
    </motion.div>
  )
}

export default SkillsTitle 
