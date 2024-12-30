import Link from 'next/link'
import React from 'react'

const SkillsButton = () => {
  return (
    <div className="flex items-center justify-center py-3">
    <Link href={"./skills"}>
      <button
        className="text-color-primary  font-extrabold bg-color-light hover:before:bg-color-secondary row-auto rounded-full relative h-12 w-full sm:w-80  overflow-hidden  
            px-4   transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-color-secondary before:transition-all before:duration-500 hover:text-color-light 
             hover:before:left-0 hover:before:w-full"
      >
        <span className="relative z-10 text-lg "> See More !!!  </span>
      </button>
    </Link>
  </div>
  )
}

export default SkillsButton

