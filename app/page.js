'use client'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CardNav from "@/components/CardNav.jsx";
import Galaxy from "@/components/Galaxy.jsx";
import GradualBlur from "@/components/GradualBlur.jsx";
import { assets } from "@/assets/assets";
import DarkVeil from "@/components/DarkVeil.jsx";


export default function Home() {

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
      <div className="hidden md:block"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <DarkVeil
          hueShift={-120}
          noiseIntensity={0.1}
          scanlineIntensity={0.05}
          speed={1.5}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1.5}
        />
     
      </div>
      <div className="md:hidden"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "1080px",
          height: "1080px",
          zIndex: -1,
        }}
      >
        <DarkVeil
          hueShift={-120}
          noiseIntensity={0.1}
          scanlineIntensity={0.05}
          speed={1.5}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1}
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
          logoHref="/"
          items={navbarItems}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        />
      </div>
      <Header />
    </>
  );
}

