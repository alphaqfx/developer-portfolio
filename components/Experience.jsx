import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import Carousel from "@/components/Carousel.jsx";
import { motion } from "framer-motion";

const Experience = ({ }) => {
    return (
        <div className='w-full px-[12%] mt-40 scroll-mt20'>
        <h2 className='text-center leading-tight text-5xl font-jost'>Professional Experience</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-jost'>
          Over the years, I have had the privilege of working with diverse organizations, contributing to impactful projects, and honing my skills in various domains. Presenting a snapshot of my professional journey.
        </p>
        
        <div className='hidden md:grid mx-auto justify-center items-center'>
          <Carousel
            baseWidth={800}
            autoplay={true}
            autoplayDelay={15000}
            pauseOnHover={true}
            loop={true}
            round={false}
          /> 
        </div>

        <div className='flex block md:hidden mx-auto justify-center'>
          <Carousel
            baseWidth={312}
            autoplay={false}
            autoplayDelay={15000}
            pauseOnHover={true}
            loop={true}
            round={false}
          /> 
        </div>

        <div className='flex flex-col sm:flex-row justify-center items-center gap-6 mt-17'>
        <motion.a
          initial={{ opacity: 1 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="/projects" className='hero-new-badge-container backdrop-blur-sm px-12 py-3 border rounded-full bg-blur text-white border-white-500 hidden md:flex items-center gap-2 duration-500'>Projects
          <Image src={assets.right_arrow_white} alt="" className='w-4' />
        </motion.a>
        <motion.a
          initial={{ opacity: 1 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          href="https://www.linkedin.com/in/vigneshuthiravelu/" target="_blank" rel="noopener noreferrer" className='hero-new-badge-container duration-500 backdrop-blur-sm px-12 py-3 border rounded-full border-white flex items-center text-black gap-2 bg-white'>LinkedIn
          <Image src={assets.right_arrow_bold_dark} alt="" className='w-4' />
        </motion.a>
      </div>



      </div>
    )
}

export default Experience
