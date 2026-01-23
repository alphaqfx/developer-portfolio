import React from 'react'
import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import ElectricBorder from './ElectricBorder'
import { info } from 'autoprefixer'
import MagicBento from './MagicBento'

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
                        enableSpotlight
                        enableBorderGlow={true}
                        enableTilt={false}
                        enableMagnetism={false}
                        clickEffect
                        spotlightRadius={400}
                        particleCount={12}
                        glowColor="132, 0, 255"
                        disableAnimations={false}
                    />

                    {/* <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({icon, iconDark, title, description},index) => (
                <li 
                
                 key={index}>
                    <ElectricBorder className='backdrop-blur-sm border-[0.5px]  rounded-xl p-6 hover:bg-[var(--color-dark-hover)] hover:-translate-y-1 duration-500 hover:shadow-[var(--shadow-white)] text-left'>
                        <Image src={iconDark} alt={title} className='w-7 flex items-center justify-center'/>
                        <h3 className='my-4 font-semibold text-white'>{title}</h3>
                        <p className='text-gray-600 text-white'>{description}</p>
                    </ElectricBorder>
                </li>
            ))}
        </ul>

        <h4 className='text-lg my-6 text-white font-jost'>Tools I use</h4>
        <ul className='flex items-center gap-3 sm:gap-5 justify-start'>
            {toolsData.map(({tool, link},index) => (tool ? (
            <li className='backdrop-blur-sm flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[var(--shadow-white)]' key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <Image src={tool} alt="Tool" className='w-5 sm:w-7'/>
                </a>
            </li>
            ):null))}
        </ul>  */}
                </div>
            </div>
        </div>
    )
}

export default About
