'use client'
import Header from "@/components/Header";
import GradualBlur from "@/components/GradualBlur.jsx";
import DarkVeil from "@/components/DarkVeil.jsx";
import Navbar from "@/components/Navbar";


export default function Home() {
  
  return (
    <>
      <div id="dark-veil-desktop" className="hidden md:block"
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
          noiseIntensity={0}
          scanlineIntensity={0.05}
          speed={1.5}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1.5}
        />
     
      </div>
      <div id="dark-veil-mobile" className="md:hidden"
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
          noiseIntensity={0}
          scanlineIntensity={0.05}
          speed={1.5}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1}
        />
        
      </div>
      <div id="grad-blur">
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
      <Header />
    </>
  );
}

