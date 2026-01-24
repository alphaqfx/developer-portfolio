import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import ChromaGrid from './ChromaGrid.jsx'

const Services = () => {

  
const items = [
  {
    
    title: "Azure Cloud Services",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson"
  },
  {
    
    title: "AWS Cloud Solutions",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  },
  {
    
    title: "Azure AI Services",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  },
  {
    
    title: "Frontend Development",
    subtitle: "React, Next.js",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  },
  {
    
    title: "Backend Development",
    subtitle: "C#, MVC.NET",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  },
  {
    
    title: "Digital Marketing",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  }
];
  return (
    <div className='w-full px-[12%] mt-40 scroll-mt20'>
      <h4 className='text-center mb-2 text-xl font-jost'>What I Offer</h4>
      <h2 className='text-center text-5xl font-jost'>My Expertise</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-jost'>
        I offer a wide range of end to end Branding services to help you reach to the target audience and achieve your marketing goals with effective strategies and creative solutions.
      </p>
      <div className='flex-1 mx-auto justify-center'>
        <ChromaGrid
        items={items}
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
      />
      </div>

      
    </div>
  )
}

export default Services
