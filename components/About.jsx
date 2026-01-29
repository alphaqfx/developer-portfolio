import React from 'react'
import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import ElectricBorder from './ElectricBorder'
import { info } from 'autoprefixer'
import MagicBento from './MagicBento'
import { motion } from 'framer-motion'

const About = ({ }) => {
    return (
        <div id='about' className='w-full max-w-7xl mx-auto px-6 py-10 mt-30 lg:mt-40 scroll-mt20'>
            <h2 className='text-center text-5xl font-jost'>About Me</h2>
            <div className='flex w-full flex-col lg:flex-row items-start gap-20 my-20'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none mx-auto lg:mx-0'>
                    <Image src={assets.user_image} alt="" className='w-full rounded-3xl' />
                </div>
                <div className='flex-1 mx-auto justify-center '>
                    <MagicBento
                        textAutoHide={true}
                        enableStars
                        enableSpotlight={false}
                        enableBorderGlow={true}
                        enableTilt={false}
                        enableMagnetism={false}
                        clickEffect
                        spotlightRadius={400}
                        particleCount={12}
                        glowColor="132, 0, 255"
                        disableAnimations={false}
                    />


                </div>

            </div>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-6 mt-15'>
                <motion.a
                    initial={{ opacity: 1 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    href="/certificates" className='hero-new-badge-container backdrop-blur-sm px-12 py-3 border rounded-full bg-blur text-white border-white-500 flex items-center gap-2 duration-500'>Certificates
                    <Image src={assets.right_arrow_white} alt="" className='w-4' />
                </motion.a>
                <motion.a
                    initial={{ opacity: 1 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                    href="/experience" className='hero-new-badge-container duration-500 backdrop-blur-sm px-12 py-3 border rounded-full border-white flex items-center text-black gap-2 bg-white'>Experience
                    <Image src={assets.right_arrow_bold_dark} alt="" className='w-4' />
                </motion.a>
            </div>
        </div>
    )
}

export default About
