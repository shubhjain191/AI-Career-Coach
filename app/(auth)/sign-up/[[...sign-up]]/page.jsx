import React from 'react'
import { SignUp } from '@clerk/nextjs'

const page = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='shadow-lg rounded-lg'>
        <SignUp />
      </div>
    </div>
  )
}

export default page
