import React from 'react'

const Banner = () => {
  return (
    <div className='container pt-16'>
      <div className='grid sm:grid-cols-2 gap-4 sm:gap-8'>
        <div className='overflow-hidden rounded-lg'>
          <img className='w-full h-full object-cover hover:scale-105' src="public/images/banner__1.webp" alt="banner" />
        </div>

        <div className='overflow-hidden rounded-lg'>
          <img className='w-full h-full object-cover hover:scale-105' src="public/images/banner__2.webp" alt="banner" />
        </div>
      </div>
      
    </div>
  )
}

export default Banner
