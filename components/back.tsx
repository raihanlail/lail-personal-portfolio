import Link from 'next/link'
import React from 'react'

const Back = () => {
  return (
    <div className="flex items-center justify-center py-4">
    <Link href={"/"}>
      <button
        className="text-color-primary mx-2 font-extrabold bg-color-light hover:before:bg-color-bright row-auto rounded-full relative h-12 w-full sm:w-80  overflow-hidden  
            px-4   transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-color-bright before:transition-all before:duration-500 hover:text-color-light 
             hover:before:left-0 hover:before:w-full"
      >
        <span className="relative z-10 text-lg "> Back to Home Page </span>
      </button>
    </Link>
  </div>
  )
}

export default Back
