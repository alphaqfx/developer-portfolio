import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import ChromaGrid from './ChromaGrid.jsx'
import { motion } from 'framer-motion'
import { SiDotnet, SiOpenai} from 'react-icons/si';
import { FaAws, FaInstagram  } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { IoLogoJavascript } from "react-icons/io";



const Expertise = () => {


  const items = [
    {

      title: "Azure Cloud Services",
      subtitle: ["Infra. Management, Admin.","Compute Servers, DevOps, CI/CD", ],
      icon: <VscAzure className="w-15 h-15" />,
      borderColor: "#428bffff",
      gradient: "linear-gradient(145deg, #3ba5f6ff, #1827b1ff)",
    },
    {

      title: "AWS Cloud Solutions",
      subtitle: ["CDNs, Storage, App Services", "VMs, Cloud Security, Optimization"],
      icon: <FaAws className="w-15 h-15" />,
      borderColor: "#f49529ff",
      gradient: "linear-gradient(180deg, #db8a27ff, #8d3f00ff)",
    },
    {

      title: "Azure OpenAI Services",
      subtitle: ["AI Model Integration, Chatbots", "Gen AI Solutions, NLP, Agentic AI"],
      icon: <SiOpenai className="w-15 h-15" />,
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #035235ff)",
    },
    {

      title: "Frontend Development",
      subtitle: ["Component Design, UX/UI, SPA", "React, Next.js, Vercel Deployment"],
      icon: <IoLogoJavascript className="w-15 h-15" />,
      borderColor: "#ddb41dff",
      gradient: "linear-gradient(180deg, #f6e445ff, #7e5904ff)",
    },
    {

      title: "Backend Development",
      subtitle: ["MVC, API Design, Microservices", "Sitecore CMS, Node.js Integration"],
      icon: <SiDotnet className="w-15 h-15" />,
      borderColor: "#bf66f3ff",
      gradient: "linear-gradient(180deg, #9649e8ff, #4b089cff)",
    },
    {

      title: "Digital Marketing",
      subtitle: ["SEO/SEM, Social Media Branding", "Content Marketing, Leads Gen."],
      icon: <FaInstagram className="w-15 h-15" />,
      borderColor: "#fd3b48ff",
      gradient: "linear-gradient(180deg, #e44242ff, #720026ff)",
    }
  ];
  return (
    <div className='w-full px-[12%] mt-40 scroll-mt20'>
      <h2 className='text-center text-5xl font-jost'>What I Offer</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-jost'>
        My expertise spans across Cloud Computing, Gen-AI integration, and Full-Stack Web Development. Delivering innovative solutions that drive business growth and operational efficiency.
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
      <div className='flex flex-col sm:flex-row justify-center items-center gap-6 mt-15'>
        <motion.a
          initial={{ opacity: 1 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="/" className='hero-new-badge-container backdrop-blur-sm px-15 py-3 border rounded-full bg-blur text-white border-white-500 hidden md:flex items-center gap-2 duration-500'>GitHub
          <Image src={assets.right_arrow_white} alt="" className='w-4' />
        </motion.a>
        <motion.a
          initial={{ opacity: 1 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          href="/projects" className='hero-new-badge-container duration-500 backdrop-blur-sm px-15 py-3 border rounded-full border-white flex items-center text-black gap-2 bg-white'>Projects
          <Image src={assets.right_arrow_bold_dark} alt="" className='w-4' />
        </motion.a>
      </div>


    </div>
  )
}

export default Expertise
