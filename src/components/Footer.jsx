import React from 'react'

const Footer = () => {

   const year = new Date().getFullYear(); 
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-b from-gray-800 to-gray-900'>
      <p className='flex mx-auto text-gray-500 text-xs'> Copyright &copy; {year} NAMPELLI SATHVIK </p>
    </div>
  )
}

export default Footer
