import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import DomeGallery from './DomeGallery.jsx'

const Portfolio = ({}) => {

  return (
    <div id='portfolio' className='w-full px-[12%] mt-40 scroll-mt20'>
      <h4 className='text-center mb-2 text-xl font-jost'>Portfolio</h4>
      <h2 className='text-center text-5xl font-jost'>My Latest Works</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-jost'>Here are some of my recent projects that showcase my skills and expertise in digital marketing.</p>

      <div className='w-full h-[600px]'>
      
    </div>

    <a href="" className='backdrop-blur-sm w-max flex items-center justify-center gap-2 text-white border-[0.5px] border-white rounded-full py-3 px-10 mx-auto my-20 hover:bg-[var(--color-dark-hover)] duration-500'>Show More
        <Image src={assets.right_arrow_bold_dark} alt="right arrow" className='w-4'/>
    </a>
    </div>

  )
}

export default Portfolio
