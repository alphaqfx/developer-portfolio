'use client'
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import CardNav from "@/components/CardNav.jsx";
import Galaxy from "@/components/Galaxy.jsx";
import GradualBlur from "@/components/GradualBlur.jsx";
import { assets } from "@/assets/assets";
import FloatingLines from "@/components/FloatingLines.jsx";
import Carousel from "@/components/Carousel.jsx";


export default function ExperiencePage() {

  const normalize = v => (v && typeof v === 'object' && 'src' in v) ? v.src : v;

  const navbarItems = [
    {
      label: "Explore",
      bgColor: "#14001cff",
      textColor: "#fff",
      links: [
        { label: "Home", ariaLabel: "Go to Home", href: "/" },
        { label: "About Me", ariaLabel: "Go to About", href: "/about" },
        { label: "Expertise", ariaLabel: "Go to Expertise", href: "/expertise" }
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

        <FloatingLines
          linesGradient={["#47c1f5", "#2F4BC0", "#5b47f5"]}
          animationSpeed={1}
          interactive={false}
          bendRadius={1}
          bendStrength={0}
          mouseDamping={0.05}
          parallax={false}
          parallaxStrength={0.35}
        />
      </div>
      <GradualBlur
        target="page"
        position="top"
        height="8.5rem"
        strength={1.5}
        divCount={6.0}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
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
      <div className='w-full px-[12%] mt-40 scroll-mt20'>
        <h2 className='text-center leading-tight text-5xl font-jost'>Professional Experience</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-jost'>
          Over the years, I have had the privilege of working with diverse organizations, contributing to impactful projects, and honing my skills in various domains. Presenting a snapshot of my professional journey.
        </p>
        
        <div className='flex hidden md:grid md:block mx-auto justify-center'>
          <Carousel
            baseWidth={750}
            autoplay={true}
            autoplayDelay={5000}
            pauseOnHover={true}
            loop={true}
            round={false}
          /> 
        </div>

        <div className='flex block md:hidden mx-auto justify-center'>
          <Carousel
            baseWidth={295}
            autoplay={true}
            autoplayDelay={5000}
            pauseOnHover={true}
            loop={true}
            round={false}
          /> 
        </div>



      </div>
      <Footer />
    </>
  );
}
