"use client"

import { motion } from 'framer-motion'
import React from 'react'

const VolunteersTitle = () => {
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
    <motion.div  className="flex mx-20 md:mx-0  items-center justify-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl  text-color-light font-bold">Volunteer <span className='text-color-secondary font-extrabold'>Experiences</span> 
       </h1>
    </motion.div>
  )
}

export default VolunteersTitle 
