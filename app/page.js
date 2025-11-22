'use client'
import About from "@/components/About";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Particles from "@/components/Particles";
import LogoLoop from "@/components/LogoLoop";
import { assets } from "@/assets/assets";
import Silk from "@/components/Silk";
import MagicBento from "@/components/MagicBento";
import CardNav from "@/components/CardNav.jsx";
import Galaxy from "@/components/Galaxy.jsx";


export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const normalize = v => (v && typeof v === 'object' && 'src' in v) ? v.src : v;

  
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  const imageLogos = [
    { src: normalize(isDarkMode?assets.aqx_light:assets.aqx), alt: "Alpha QFX", href: "" },
    { src: normalize(isDarkMode?assets.qs_light:assets.qs), alt: "Quantum Studios", href: "" },
    { src: normalize(isDarkMode?assets.lm_light:assets.lm), alt: "Logo Market", href: "" },
    { src: normalize(isDarkMode?assets.pcs_light:assets.pcs), alt: "Profit Capital Solutions", href: "" },
    { src: normalize(isDarkMode?assets.ferro_light:assets.ferro), alt: "Ferro Modelling", href: "" },
    { src: normalize(isDarkMode?assets.pplus_light:assets.pplus), alt: "Power Plus", href: "" },
    { src: normalize(isDarkMode?assets.lc_light:assets.lc), alt: "Le Ciel", href: "" }
  ];

  useEffect(() => {
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    } else{
      setIsDarkMode(false);
    }

  }, []);

  useEffect(() => {
    if(isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode]);

  return (
    <>
    {/* <Particles
    isDarkMode={isDarkMode}
    particleCount={600}
    particleSpread={20}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={false}
    alphaParticles={false}
    disableRotation={false}
    /> */}
    {/* <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
      <Silk
        speed={10}
        scale={1}
        color="#9c16efff"
        noiseIntensity={1.5}
        rotation={4.5}
      />
    </div> */}
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
  <Galaxy 
    mouseRepulsion={false}
    mouseInteraction={false}
    density={2}
    glowIntensity={0.25}
    saturation={0}
    hueShift={240}
  />
</div>
    {/* <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} /> */}
    <CardNav
      logo={isDarkMode?assets.logo_dark:assets.logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
    <Header isDarkMode={isDarkMode} />
    <About isDarkMode={isDarkMode} />
    <div className="mx-auto h-screen flex flex-col items-center justify-center gap-4"><MagicBento 
  textAutoHide={true}
  enableStars={true}
  enableSpotlight={false}
  enableBorderGlow={true}
  enableTilt={false}
  enableMagnetism={true}
  clickEffect={true}
  spotlightRadius={300}
  particleCount={12}
  glowColor="132, 0, 255"
/></div>
    <Services isDarkMode={isDarkMode} />
    <Portfolio isDarkMode={isDarkMode} />
    <div style={{ height: '200px', position: 'relative'}}>
      <h4 className='text-center mb-6 text-2xl font-jost'>Trusted by Brands</h4>
      <LogoLoop
        logos={imageLogos}
        speed={75}
        direction="left"
        logoHeight={100}
        gap={50}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor={isDarkMode?"#11001F":"#ffffff"}
        ariaLabel="Technology partners"
      />
    </div>
    <Contact isDarkMode={isDarkMode} />
    <Footer isDarkMode={isDarkMode} />
    </>
  );
}

