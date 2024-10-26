import React from 'react'
import image from "../assets/image.png"

const Hero = () => {
  return (
    <div className='my-[40px]'>
      <div className='container flex lg:flex-row flex-col sm:text-[60px] text-[30px] sm:text-start text-center items-center justify-between'>
        <div>
          <img src={image} alt="" />
        </div>
        <h1 className='font-bold'>MY NAME IS NODIKO BEJANIDZE</h1>
      </div>
    </div>
  )
}

export default Hero
