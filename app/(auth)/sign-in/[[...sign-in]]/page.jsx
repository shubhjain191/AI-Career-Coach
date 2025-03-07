import React from 'react'
import { SignIn } from '@clerk/nextjs'
const page = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
    <div className='shadow-lg rounded-lg'>
      <SignIn />
    </div>
  </div>
  )
}

export default page
