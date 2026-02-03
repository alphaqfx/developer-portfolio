import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import MagicBento from './MagicBento'
import { motion } from 'framer-motion'
import TiltedCard from './TiltedCard.jsx'

const About = ({ }) => {
    return (
        <div id='about' className='w-full max-w-7xl mx-auto px-6 py-10 mt-30 lg:mt-40 scroll-mt20'>
            <h2 className='text-center text-5xl font-jost'>About Me</h2>
            <div className='flex w-full flex-col lg:flex-row items-start gap-12 my-20'>
                <div id='profile-mobile' className='md:hidden w-65 sm:w-80 rounded-3xl max-w-none mx-auto lg:mx-0'>
                    <Image src={assets.user_image} alt="" className='w-full rounded-3xl' />
                    <p className="text-center tilted-card-demo-text border rounded-full border-white-500">
                        Vignesh Uthiravelu
                    </p>
                </div>
                <div id='profile-desktop' className='hidden md:flex mx-auto mt-5'>
                    <TiltedCard
                        imageSrc="https://vignesh-uthiravelu.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser-image.6384f67d.png&w=1920&q=75"
                        altText="Vignesh Uthiravelu - Gen AI & Cloud Engineer"
                        captionText="Vignesh Uthiravelu - Gen AI & Cloud Engineer"
                        containerHeight="400px"
                        containerWidth="300px"
                        imageHeight="400px"
                        imageWidth="300px"
                        rotateAmplitude={5}
                        scaleOnHover={1.05}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className="text-center tilted-card-demo-text border rounded-full border-white-500">
                                Vignesh Uthiravelu
                            </p>
                        }
                    />

                </div>
                <div id='bento-grid' className='flex-1 mx-auto justify-center '>
                    <MagicBento
                        textAutoHide={true}
                        enableStars={false}
                        enableSpotlight={false}
                        enableBorderGlow={false}
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
