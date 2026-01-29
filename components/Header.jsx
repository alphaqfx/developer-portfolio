import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      {/* <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.8, type:'spring' , stiffness: 45 }}>
        <Image src={assets.profile_img} alt="" className='rounded-full w-32'/>        
      </motion.div> */}
        
        <motion.h3 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex text-white items-end gap-2 text-xl md:text-2xl font-jost mb-3'>
          Hi! I'm Vignesh Uthiravelu
        </motion.h3>
        <motion.h1 
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-3xl text-white sm:text-6xl lg:text-[50px] font-jost'>
            Gen AI & Cloud Engineer
        </motion.h1>
        <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='text-white max-w-2xl mx-auto font-jost'>
            Crafting seamless web experiences with expertise in React, Next.js, .NET, and more. Let's build something amazing together!
        </motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-6 mt-4'>
            <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="/about" className='hero-new-badge-container backdrop-blur-sm px-15 py-3 border rounded-full bg-blur text-white border-white-500 flex items-center gap-2 duration-500'>About Me
                <Image src={assets.right_arrow_white} alt="" className='w-4'/>
            </motion.a>
            <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            href="/Vignesh_CV.pdf" download className='hero-new-badge-container duration-500 backdrop-blur-sm px-15 py-3 border rounded-full border-white flex items-center text-black gap-2 bg-white'>My Resume
                <Image src={assets.download_icon} alt="" className='w-4'/>
            </motion.a>
        </div>
    </div>
  )
}

export default Header
