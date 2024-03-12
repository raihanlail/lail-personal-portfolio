import { volunteersData } from '@/lib/data'
import Image from 'next/image'
import React from 'react'
import VolunteersTitle from './volunteersTitle'

const parseData = () => {
    return volunteersData.map ((data, i)=> {
        const { description } = data;
        const descText = {__html: description };
        return <div key={i} dangerouslySetInnerHTML={descText}/> 
        
        })
    }

const Volunteers = () => {
  return (
    <div className="my-16 md:my-32">
      <VolunteersTitle/>
      {volunteersData.map((data, i) => (
        <section
          key={i}
          className="flex flex-col lg:flex-row border-4 border-color-bright rounded-lg transition-all mx-8 md:mx-12 my-12"
        >
          <div className="w-full lg:w-2/3 flex flex-col p-8 text-color-light justify-between">
            <div className="flex flex-col text-color-light  ">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold">
                {data.title} at{" "}
                <span className="text-color-bright">{data.location} </span>
              </h1>
            </div>
            <div className="pt-12 md:pt-0">
              <p className="md:text-xl font-bold"> {parseData()}</p>
            </div>
            <div className='pt-12 md:pt-0'>
              <p>{data.date}</p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col items-center justify-center">
            <div key={i} className="">
              {data.images.map((img, i) => (
                <div
                  key={i}
                  className=" w-96 h-72 overflow-hidden flex items-center justify-center"
                >
                  <Image
                    src={img.image}
                    width={1000}
                    height={1000}
                    alt="img"
                    className="py-8 w-64 sm:w-full lg:w-full max-h-72 overflow-hidden rounded-lg hover:scale-105 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default Volunteers
