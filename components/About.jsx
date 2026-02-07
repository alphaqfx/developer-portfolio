import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import MagicBento from './MagicBento'
import { motion } from 'framer-motion'
import { SiGooglegemini, SiGooglecloud } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { TbLineDashed } from "react-icons/tb";



const About = ({ }) => {
    return (
        <div className='w-full max-w-7xl mx-auto px-6 py-10 mt-28 lg:mt-32 scroll-mt20'>
            <h4 className='text-white text-center mb-2 text-xl font-jost'>Professional Details</h4>
            <h2 className='text-center text-4xl font-jost'>Get to Know Me</h2>
            <div className='flex w-full flex-col lg:flex-row items-start gap-4 my-10'>
                <div className=' w-64 rounded-3xl mx-auto relative mt-3'>

                    <Image src={assets.user_image} alt="" className='hover:scale-102 duration-500 relative w-auto rounded-4xl' />

                    <p className="w-full text-center mt-6 my-4  tilted-card-demo-text border rounded-full border-white-500">
                        Vignesh Uthiravelu
                    </p>

                    <p className="w-full text-center text-lg font-medium">
                        Gen AI & Cloud Engineer
                    </p>

                    <div className='flex grid-cols-5 gap-4 mt-4 my-4 mx-auto items-center justify-center '>
                        <TbLineDashed alt="" className='  w-8 h-8  ' />
                        <SiGooglegemini alt="" className='  w-8 h-8  ' />
                        <SiGooglecloud alt="" className='  w-8 h-8  ' />
                        <FaCode alt="" className='  w-8 h-8  ' />
                        <TbLineDashed alt="" className='  w-8 h-8  ' />
                    </div>

                </div>
                <div id='bento-grid' className='flex-1 mx-auto justify-center '>
                    <MagicBento
                        textAutoHide={true}
                        enableStars={false}
                        enableSpotlight={false}
                        enableBorderGlow={true}
                        enableTilt={false}
                        enableMagnetism={false}
                        clickEffect={false}
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
