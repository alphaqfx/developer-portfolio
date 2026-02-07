'use client'
import About from "@/components/About";
import Footer from "@/components/Footer";
import Galaxy from "@/components/Galaxy.jsx";
import GradualBlur from "@/components/GradualBlur.jsx";
import Navbar from "@/components/Navbar";

export default function AboutPage() {

  return (
    <>
      <div id="galaxy"
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
          starSpeed={1}
          density={2}
          hueShift={130}
          speed={0.2}
          glowIntensity={0.1}
          saturation={0}
          mouseRepulsion
          repulsionStrength={0}
          twinkleIntensity={1}
          rotationSpeed={0}
          transparent={false}
        />
      </div>
      <div id="gradual-blur">
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
      </div>
      <Navbar />
      <About />
      <Footer />
    </>
  );
}
