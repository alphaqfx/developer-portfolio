'use client'
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GradualBlur from "@/components/GradualBlur.jsx";
import Beams from "@/components/Beams.jsx";
import Navbar from "@/components/Navbar";


export default function ContactPage() {

  return (
    <>
      <div id="beams"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <Beams
    beamWidth={2.5}
    beamHeight={25}
    beamNumber={30}
    lightColor="#ffffff"
    speed={3}
    noiseIntensity={1.75}
    scale={0.2}
    rotation={45}
  />
        {/* <Galaxy
          mouseRepulsion={false}
          mouseInteraction={false}
          density={1}
          glowIntensity={0.25}
          saturation={0}
          hueShift={240}
        /> */}
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
      <Contact />
      <Footer />
    </>
  );
}
