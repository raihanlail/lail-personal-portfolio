"use client"

import Back from '@/components/back'
import OtherSkills from '@/components/otherSkills'
import Skills from '@/components/skills'
import { motion } from 'framer-motion'
import React from 'react'

const page = () => {
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
    <motion.div initial="initial" id='Skills'
    animate="animate"
    variants={ScrollAnimationVariants} className='mt-32 md:mt-32'>
        <div className='text-xl -mb-20  sm:py-4 px-8 pb-2 sm:pb-0  sm:px-14 relative text-color-light'>
            <h1>For Main Work:</h1>
        </div>
        <div className=''>

      <Skills/>
        </div>
        <div className='px-8 sm:px-14 text-color-light text-xl'>
            <h1>For Other Works / Studying:</h1>
        </div>
        <OtherSkills/>
        <Back/>
    </motion.div>
  )
}

export default page
