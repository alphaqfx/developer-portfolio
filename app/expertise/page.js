'use client'
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import GradualBlur from "@/components/GradualBlur.jsx";
import DotGrid from "@/components/DotGrid.jsx";
import Navbar from "@/components/Navbar";


export default function ExpertisePage() {

  return (
    <>
      <div id="dotgrid"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <DotGrid
          dotSize={5}
          gap={20}
          baseColor="#211830"
          activeColor="#7c5cff"
          proximity={90}
          speedTrigger={150}
          shockRadius={300}
          shockStrength={4}
          maxSpeed={5000}
          resistance={750}
          returnDuration={1.5}
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
      <Expertise />
      <Footer />
    </>
  );
}
