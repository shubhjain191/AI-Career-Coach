import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='flex justify-center items-center min-h-screen p-20'>
      <div className='w-full max-w-md shadow-lg rounded-lg'>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
