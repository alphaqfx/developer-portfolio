"use client"
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

const Navbar = ({}) => {

  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  }, [])
  return (
    <>
    <div className='fixed top-0 left-0 w-11/12 -z-10 translate-y-[-80%]'>
      <Image src={assets.header_bg_color} alt="" className='w-full'/>
    </div>
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/35 backdrop-blur-lg shadow-sm duration-500" : ""}`}>
        <a href="#top">
           <Image src={assets.logo_dark} alt="logo" className='w-32 cursor-pointer mr-14'/>
        </a>
        <ul className={`hidden md:flex text-black items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll? "":"backdrop-blur-lg bg-white shadow-sm bg-opacity-50 duration-500"} `}>
            <li><a className="font-jost" href="/">Home</a></li>
            <li><a className="font-jost" href="#about">About Me</a></li>
            <li><a className="font-jost" href="#services">Services</a></li>
            <li><a className="font-jost" href="#portfolio">Portfolio</a></li>
            <li><a className="font-jost" href="#contact">Contact Me</a></li>
        </ul>
        
        
        
        
    </nav>
      
    </>
  )
}

export default Navbar
