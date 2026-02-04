import React from "react";
import CardNav from "@/components/CardNav.jsx";
import { assets } from "@/assets/assets.js";
import { BiHomeAlt } from "react-icons/bi";
import { CgProfile, CgBriefcase } from "react-icons/cg";
import { RiRocketLine } from "react-icons/ri";
import { PiCertificateBold } from "react-icons/pi";
import { GiLaurelsTrophy } from "react-icons/gi";
import { MdOutlineMarkEmailRead  } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";


const Navbar = ({}) => {

const navbarItems = [
    {
      label: "Explore",
      bgColor: "#14001cff",
      textColor: "#fff",
      links: [
        { label: "Home", ariaLabel: "Go to Home", href: "/", icon: <BiHomeAlt /> },
        { label: "About Me", ariaLabel: "Go to About", href: "/about", icon: <CgProfile /> },
        { label: "Expertise", ariaLabel: "Go to Services", href: "/expertise", icon: <GiLaurelsTrophy /> }
      ]
    },
    {
      label: "Portfolio",
      bgColor: "#14001cff",
      textColor: "#fff",
      links: [
        { label: "Projects", ariaLabel: "Go to Projects", href: "/projects", icon: <RiRocketLine /> },
        { label: "Certificates", ariaLabel: "Go to Certificates", href: "/certificates", icon: <PiCertificateBold /> },
        { label: "Experience", ariaLabel: "Go to Experience", href: "/experience", icon: <CgBriefcase /> }
      ]
    },
    {
      label: "Connect",
      bgColor: "#14001cff",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email", href: "/contact", icon: <MdOutlineMarkEmailRead /> },
        { label: "GitHub", ariaLabel: "GitHub", href: "#", target: "_blank", icon: <VscGithub /> },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://www.linkedin.com/in/vigneshuthiravelu/", target: "_blank", rel: "noopener noreferrer", icon: <FaLinkedin /> }
      ]
    }
  ];

  return (
    <>
    <div id="navbar"
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
          logoAlt="Site Logo"
          logoHref="/"
          items={navbarItems}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        />
      </div>
      
    </>
  )
}

export default Navbar
