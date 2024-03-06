import Image from 'next/image'
import React from 'react'

const Jumbotron = () => {
  return (
    <section className='max-w-full -my-8 lg:h-[32rem] flex flex-col lg:flex-row mx-4 rounded-md sm:mx-8 md:mx-20 border-double border-color-bright'>
        <div className='w-full lg:w-1/2 flex items-center lg:px-16 justify-center lg:justify-start'>
            <Image src={"/photo.png"} alt='ggg' width={1000} height={1000} className='rounded-full h-56 w-60 lg:h-96 lg:w-[26rem]'/>

        </div>
        <div className='w-full lg:w-1/2 flex items-center justify-center text-color-light'>
            <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[8.2rem] py-8 lg:py-0 px-8 text-center font-bold'>
                Raihan <span className='text-color-bright font-extrabold'>Lail</span> Ramadhan

            </h1>

        </div>
    </section>
  )
}

export default Jumbotron
