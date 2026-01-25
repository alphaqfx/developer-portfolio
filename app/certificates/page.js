'use client'
import Image from "next/image";
import Footer from "@/components/Footer";
import CardNav from "@/components/CardNav.jsx";
import GradualBlur from "@/components/GradualBlur.jsx";
import { assets } from "@/assets/assets";
import Silk from "@/components/Silk";
import CardSwap, { Card } from "@/components/CardSwap.jsx";
import { toolsData } from "@/assets/assets";



export default function CertificatesPage() {

  const normalize = v => (v && typeof v === 'object' && 'src' in v) ? v.src : v;


  const navbarItems = [
    {
      label: "Explore",
      bgColor: "#14001cff",
      textColor: "#fff",
      links: [
        { label: "Home", ariaLabel: "Go to Home", href: "/" },
        { label: "About Me", ariaLabel: "Go to About", href: "/about" },
        { label: "Expertise", ariaLabel: "Go to Services", href: "/expertise" }
      ]
    },
    {
      label: "Portfolio",
      bgColor: "#14001cff",
      textColor: "#fff",
      links: [
        { label: "Projects", ariaLabel: "Go to Projects", href: "/projects" },
        { label: "Certificates", ariaLabel: "Go to Certificates", href: "/certificates" },
        { label: "Experience", ariaLabel: "Go to Experience", href: "/experience" }
      ]
    },
    {
      label: "Connect",
      bgColor: "#14001cff",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email", href: "/contact" },
        { label: "Instagram", ariaLabel: "Instagram", href: "#", target: "_blank" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://www.linkedin.com/in/vigneshuthiravelu/", target: "_blank", rel: "noopener noreferrer" }
      ]
    }
  ];

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <Silk
          speed={4.2}
          scale={1}
          color="#007d53ff"
          noiseIntensity={1}
          rotation={0}
        />
      </div>
      <div >
        <GradualBlur
          target="page"
          position="top"
          height="8.5rem"
          strength={1.5}
          divCount={6.0}
          curve="bezier"
          exponential={true}
          opacity={1}
        /></div>
      <div
        style={{
          position: "relative",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 90,
        }}
      >
        <CardNav
          logo={assets.logo}
          logoAlt="Company Logo"
          items={navbarItems}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        />
      </div>

      <div className='w-full max-w-7xl mx-auto px-6 lg:px-5 md:px-15 flex flex-col lg:flex-row gap-10 items-center mt-40 lg:mt-50 '>
        <div className='w-full'>
          <h2 className='text-left text-4xl md:text-5xl font-jost leading-tight'>Professional Certifications</h2>
          <div className='w-full my-8 md:my-10'>
            <div className='text-left'>
              <h4 className='mb-10 max-w-xl font-jost'>
                I have earned several professional certifications that validate my expertise in Enterprise Web App Development, AI Assisted Workflow, Cloud Engineering, and modern technologies. These certifications demonstrate my commitment to staying updated with industry trends and best practices.
              </h4>
              <div className="hidden md:block ">
              <h4 className='text-lg my-6 text-white font-jost'>Tools I use</h4>
              <ul className='flex items-center gap-3 sm:gap-5 justify-start'>
                {toolsData.map(({ tool, link }, index) => (tool ? (
                  <li className='backdrop-blur-sm flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[var(--shadow-white)]' key={index}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <Image src={tool} alt="Tool" className='w-5 sm:w-7' />
                    </a>
                  </li>
                ) : null))}
              </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full hidden md:block'>
          <CardSwap
            cardDistance={60}
            verticalDistance={55}
            delay={5000}
            pauseOnHover={true}
          >
            <Card>
              <div className="py-5" >
                <Image src={assets.ai_104} alt="azure" />
              </div>
            </Card>
            <Card>
              <div className="py-5" >
                <Image src={assets.aws} alt="aws" />
              </div>
            </Card>
            <Card>
              <div className="py-5" >
                <Image src={assets.google} alt="google" />
              </div>
            </Card>
            <Card>
              <div className="py-5" >
                <Image src={assets.copilot} alt="copilot" />
              </div>
            </Card>
            <Card>
              <div className="py-5" >
                <Image src={assets.ibm} alt="ibm" />
              </div>
            </Card>
            <Card>
              <div className="py-5" >
                <Image src={assets.sitecore} alt="sitecore" />
              </div>
            </Card>
          </CardSwap>
        </div>
      
        <div className='mx-auto mt-30 md:hidden'>
          <CardSwap
            cardDistance={60}
            verticalDistance={55}
            delay={5000}
            pauseOnHover={true}
            skewAmount={0}
          >
            <Card>
              <div className="py-5" >
                <Image src={assets.ai_104} alt="azure" />
              </div>
            </Card>
            <Card>
              <div className="py-5" >
                <Image src={assets.aws} alt="aws" />
              </div>
            </Card>
            <Card>
              <div className="py-5" >
                <Image src={assets.google} alt="google" />
              </div>
            </Card>
            <Card>
              <div className="py-5" >
                <Image src={assets.copilot} alt="copilot" />
              </div>
            </Card>
            <Card>
              <div className="py-5" >
                <Image src={assets.ibm} alt="ibm" />
              </div>
            </Card>
            <Card>
              <div className="py-5" >
                <Image src={assets.sitecore} alt="sitecore" />
              </div>
            </Card>
          </CardSwap>
        </div>

        <div className="md:hidden mt-35" style={{ zIndex: -1 }}>
              <h4 className='text-lg my-6 text-white font-jost'>Tools I use</h4>
              <ul className='flex items-center gap-3 sm:gap-5 justify-start'>
                {toolsData.map(({ tool, link }, index) => (tool ? (
                  <li className='backdrop-blur-sm flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[var(--shadow-white)]' key={index}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <Image src={tool} alt="Tool" className='w-5 sm:w-7' />
                    </a>
                  </li>
                ) : null))}
              </ul>
              </div>

      </div>
      <Footer />
    </>
  );
}
