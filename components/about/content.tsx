import { aboutData } from '@/lib/about'
import React from 'react'

function parseData() {
    return aboutData.map((data, i) => {
        const {content} = data;
        const aboutText ={__html: content};
        return <div className='py-4' key={i} dangerouslySetInnerHTML={aboutText}/>
    })
}
const ContentData = () => {
  return (
    <div className='text-color-light text-justify md:text-left border-4 border-color-bright rounded-lg  text-lg lg:text-2xl py-4 lg:py-16'>
      <p className='p-4'>{parseData()}</p>
    </div>
  )
}

export default ContentData
