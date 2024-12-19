import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Jumbotron = () => {
  const slideAnimation = {
    initial: {
      opacity: 0,
      x: 150
    },
    animate: {
      opacity: 1,
      x: 0,

      transition: {
        delay: 1,
        duration: 0.7,
      },
    },
  }
  return (
    <section className='max-w-full min-h-screen  lg:h-[40rem] flex flex-col lg:flex-row mx-4 rounded-md sm:mx-8 md:mx-20 border-double border-color-bright'>
        <div className='w-full lg:w-1/2 flex items-center lg:px-16 justify-center'>
            <Image src={"/photo.png"} alt='ggg' width={1000} height={1000} className='rounded-full h-64 w-64 lg:h-80 lg:w-80 object-cover'/>
        </div>
        <div className='w-full lg:w-1/2 flex items-center justify-center text-color-light overflow-hidden'>
            <motion.h1 variants={slideAnimation} initial="initial" animate="animate" className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl py-8 lg:py-0 px-8 text-center font-bold'>
                Raihan <span className='text-color-bright font-extrabold'>Lail</span> Ramadhan
            </motion.h1>
        </div>
    </section>
  )
}

export default Jumbotron