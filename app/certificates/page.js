'use client'
import Image from "next/image";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import CardNav from "@/components/CardNav.jsx";
import Galaxy from "@/components/Galaxy.jsx";
import GradualBlur from "@/components/GradualBlur.jsx";
import { assets } from "@/assets/assets";
import Silk from "@/components/Silk";
import CardSwap, { Card } from "@/components/CardSwap.jsx";


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
          color="#0a6685"
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

      <div className="grid md:grid-cols-2 lg:grid-cols-2">
        <div className='w-full max-w-xl mx-auto px-6 mt-50'>
          <h2 className='text-left text-5xl font-jost'>Professional Certifications</h2>
          <div className='flex w-full flex-col lg:flex-row items-start gap-20 my-10'>
            <div className='flex-1 text-left'>
              <h4 className='mb-10 max-w-xl font-jost'>
                I have earned several professional certifications that validate my expertise in Enterprise Web App Development, AI Assisted Workflow, Cloud Engineering, and modern technologies. These certifications demonstrate my commitment to staying updated with industry trends and best practices.
              </h4>
            </div>
          </div>          
        </div>
        <div className='lg:mt-40 md:mt-40'>
        <CardSwap
            cardDistance={60}
            verticalDistance={70}
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
      </div>
    </>
  );
}
