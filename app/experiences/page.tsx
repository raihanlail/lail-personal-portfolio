import ExperiencesContainer from '@/components/experience/experiencesContainer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Experiences"
}

const page = () => {
    
  return (
    <ExperiencesContainer/>
  )
}

export default page
