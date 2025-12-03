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
import GradualBlur from "@/components/GradualBlur.jsx";


export default function Home() {

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
    { src: normalize(assets.aqx_light), alt: "Alpha QFX", href: "" },
    { src: normalize(assets.qs_light), alt: "Quantum Studios", href: "" },
    { src: normalize(assets.lm_light), alt: "Logo Market", href: "" },
    { src: normalize(assets.pcs_light), alt: "Profit Capital Solutions", href: "" },
    { src: normalize(assets.ferro_light), alt: "Ferro Modelling", href: "" },
    { src: normalize(assets.pplus_light), alt: "Power Plus", href: "" },
    { src: normalize(assets.lc_light), alt: "Le Ciel", href: "" }
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
          density={2}
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
          items={items}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        />
      </div>
      <Header />
      <About />
      <div className="mx-auto h-screen flex flex-col items-center justify-center gap-4" style={{ position: "relative", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}>
        <MagicBento
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
        />
      </div>
      <Services />
      <Portfolio />
      <div style={{ height: "200px", position: "relative" }}>
        <h4 className="text-center mb-6 text-2xl font-jost">
          Trusted by Brands
        </h4>
        <LogoLoop
          logos={imageLogos}
          speed={75}
          direction="left"
          logoHeight={100}
          gap={50}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor={"#000000ff"}
          ariaLabel="Technology partners"
        />
      </div>
      <Contact />
      <Footer />
    </>
  );
}

