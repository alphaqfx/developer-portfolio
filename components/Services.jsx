import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import ChromaGrid from './ChromaGrid.jsx'

const Services = () => {

  
const items = [
  {
    
    title: "Azure Cloud Services",
    subtitle: "DevOps, Infrastructure",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3ba5f6ff, #091158ff)",
  },
  {
    
    title: "AWS Cloud Solutions",
    subtitle: "Compute, Storage",
    handle: "@mikechen",
    borderColor: "#f49529ff",
    gradient: "linear-gradient(180deg, #db8a27ff, #8d3f00ff)",
  },
  {
    
    title: "Azure OpenAI Services",
    subtitle: "Apps, AI Integration",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #035235ff)",
  },
  {
    
    title: "Frontend Development",
    subtitle: "React, Next.js",
    handle: "@mikechen",
    borderColor: "#ddb41dff",
    gradient: "linear-gradient(180deg, #f6e445ff, #7e5904ff)",
  },
  {
    
    title: "Backend Development",
    subtitle: "C#, MVC.NET",
    handle: "@mikechen",
    borderColor: "#bf66f3ff",
    gradient: "linear-gradient(180deg, #9649e8ff, #4b089cff)",
  },
  {
    
    title: "Digital Marketing",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#fd3b65ff",
    gradient: "linear-gradient(180deg, #ef3434ff, #51002eff)",
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
