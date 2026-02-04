'use client'
import Footer from "@/components/Footer";
import GradualBlur from "@/components/GradualBlur.jsx";
import FloatingLines from "@/components/FloatingLines.jsx";
import Experience from "@/components/Experience.jsx";
import Navbar from "@/components/Navbar";



export default function ExperiencePage() {

  return (
    <>
      <div id="lines"
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
      <Experience />
      <Footer />
    </>
  );
}
