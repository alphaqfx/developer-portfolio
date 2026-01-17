'use client'
import About from "@/components/About";
import Footer from "@/components/Footer";
import CardNav from "@/components/CardNav.jsx";
import Galaxy from "@/components/Galaxy.jsx";
import GradualBlur from "@/components/GradualBlur.jsx";
import { assets } from "@/assets/assets";


export default function AboutPage() {

  const normalize = v => (v && typeof v === 'object' && 'src' in v) ? v.src : v;

  const navbarItems = [
    {
      label: "Home",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Home", ariaLabel: "Back to Home", href: "/" },
        { label: "Services", ariaLabel: "Go to Services", href: "/services" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Portfolio", ariaLabel: "Go to Portfolio", href: "/portfolio" },
        { label: "Case Studies", ariaLabel: "View Case Studies", href: "/portfolio" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "/contact" },
        { label: "Twitter", ariaLabel: "Twitter", href: "#" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "#" }
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
        <Galaxy
          mouseRepulsion={false}
          mouseInteraction={false}
          density={1}
          glowIntensity={0.25}
          saturation={0}
          hueShift={240}
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
      <About />
      <Footer />
    </>
  );
}
