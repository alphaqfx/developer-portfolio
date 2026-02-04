'use client'
import Footer from "@/components/Footer";
import GradualBlur from "@/components/GradualBlur.jsx";
import Silk from "@/components/Silk";
import Navbar from "@/components/Navbar";
import Certificates from "@/components/Certificates";


export default function CertificatesPage() {

  return (
    <>
      <div id="silk-desktop" className="hidden md:block"
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
      <div id="silk-mobile" className="md:hidden"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "1080px",
          height: "1080px",
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
      <Certificates />
      <Footer />
    </>
  );
}
