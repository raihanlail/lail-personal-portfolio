import { projectsData } from '@/lib/data'
import React from 'react'

const Page = ({ params }) => {
    const {id} = params;
  return (
    <div>
<h1>{projectsData[id].title}</h1>
    </div>
  )
}

export default Page
