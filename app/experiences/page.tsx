import ExperiencesContainer from '@/components/experience/experiencesContainer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Experiences",
  description: "Raihan Lail Ramadhan's Experiences",
  keywords:"Raihan Lail Ramadhan's Experiences"
}

const page = () => {
    
  return (
    <ExperiencesContainer/>
  )
}

export default page
