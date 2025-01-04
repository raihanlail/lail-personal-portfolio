"use client"
import Back from '@/components/back/back'
import Experiences from '@/components/experience/experiences'
import { motion } from 'framer-motion'
import React from 'react'
import Line from '@/app/about/line'
import Volunteers from '@/components/volunteers/volunteers'

const ExperiencesContainer = () => {
    const fadeInAnimationVariants = {
        initial: {
          opacity: 0,
    
          y: 100,
        },
        animate: {
          opacity: 1,
          y: 0,
    
          transition: {
            delay: 0.6,
            duration: 0.5,
          },
        },
      };
  return (
    <motion.div variants={fadeInAnimationVariants}
    initial="initial"
    id="About"
    animate="animate"
    className='py-4'>
      <Experiences/>
      <Line/>
      <Volunteers/>
      <Back/>
      
    </motion.div>
    
  )
}

export default ExperiencesContainer
