import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'framer-motion'
import CardSwap, { Card } from "@/components/CardSwap.jsx";
import LogoLoop from '@/components/LogoLoop.jsx';
import { SiReact, SiNextdotjs, SiJavascript, SiDotnet, SiOpenai, SiGithubcopilot, SiSitecore} from 'react-icons/si';
import { FaAws, FaGithub, FaLinux, FaPython } from 'react-icons/fa';
import { VscAzure, VscAzureDevops, VscVscode } from 'react-icons/vsc';
import { DiMsqlServer, DiVisualstudio } from 'react-icons/di';
import { TbBrandCSharp } from 'react-icons/tb';

const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <FaAws />, title: "AWS", href: "https://aws.amazon.com" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiDotnet />, title: "ASP.NET", href: "https://dotnet.microsoft.com/en-us/apps/aspnet" },
    { node: <SiOpenai />, title: "OpenAI", href: "https://openai.com" },
    { node: <SiGithubcopilot />, title: "GitHub Copilot", href: "https://github.com/features/copilot" },   
    { node: <FaGithub />, title: "GitHub", href: "https://github.com" },
    { node: <SiSitecore />, title: "Sitecore", href: "https://www.sitecore.com" },
    { node: <FaPython />, title: "Python", href: "https://www.python.org" },
    { node: <VscAzure />, title: "Azure", href: "https://azure.microsoft.com" },
    { node: <VscAzureDevops />, title: "Azure DevOps", href: "https://azure.microsoft.com/en-us/services/devops/" },
    { node: <FaLinux />, title: "Linux", href: "https://www.linux.org" },
    { node: <DiMsqlServer />, title: "MS SQL Server", href: "https://www.microsoft.com/en-us/sql-server" },
    { node: <DiVisualstudio />, title: "Visual Studio", href: "https://visualstudio.microsoft.com" },
    { node: <TbBrandCSharp />, title: "C#", href: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
    { node: <VscVscode />, title: "VS Code", href: "https://code.visualstudio.com" }, 

];

const Certificates = ({ }) => {
    return (
        <div className='w-full max-w-7xl mx-auto px-6 lg:px-5 md:px-15 flex flex-col lg:flex-row md:gap-10 items-center mt-40 lg:mt-50 '>
        <div className='w-full px-2 md:px-0 '>
          <h2 className='text-left text-4xl md:text-5xl font-jost leading-tight'>Professional Certifications</h2>
          <div className='w-full my-8 md:my-10'>
            <div className='text-left'>
              <h4 className='mb-10 max-w-xl font-jost'>
                I have earned several professional certifications that validate my expertise in Enterprise Web App Development, AI Assisted Workflow, Cloud Engineering, and modern technologies. These certifications demonstrate my commitment to staying updated with industry trends and best practices.
              </h4>
              <div className="hidden md:block ">
                <h4 className='text-lg my-6 text-white font-jost font-semi-bold'>Proficient Tools & Technologies</h4>
                <div className='w-md mt-8 flex items-center overflow-x-hidden' style={{
                  maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                }}>
                  <LogoLoop
                        logos={techLogos}
                        speed={40}
                        direction="left"
                        logoHeight={50}
                        gap={50}
                        hoverSpeed={0}
                        scaleOnHover
                        fadeOut={false}
                        fadeOutColor="#ffffffff"
                        ariaLabel="Skilled Technologies"
                    />
                </div>
                
                <div className='hidden md:flex flex-col sm:flex-row justify-left ml-20 items-center gap-6 mt-15'>
                                
                                <motion.a
                                    initial={{ opacity: 1 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 1.5 }}
                                    href="/expertise" className='hero-new-badge-container duration-500 backdrop-blur-sm px-12 py-3 border rounded-full border-white flex items-center text-black gap-2 bg-white'>Applied Skills
                                    <Image src={assets.right_arrow_bold_dark} alt="" className='w-4' />
                                </motion.a>
                            </div>
              </div>
            </div>
          </div>
        </div>
        <div id='cardswap-desktop' className='w-full hidden md:block'>
          <CardSwap
            cardDistance={60}
            verticalDistance={55}
            delay={5000}
            pauseOnHover={true}
          >
            <Card>
              <div className="py-5" >
                <Image src={assets.ai_104} alt="azure" />
              </div>
            </Card>
            <Card>
              <div className="py-5" >
                <Image src={assets.aws} alt="aws" />
              </div>
            </Card>
            <Card>
              <div className="py-5" >
                <Image src={assets.google} alt="google" />
              </div>
            </Card>
            <Card>
              <div className="py-5" >
                <Image src={assets.copilot} alt="copilot" />
              </div>
            </Card>
            <Card>
              <div className="py-5" >
                <Image src={assets.ibm} alt="ibm" />
              </div>
            </Card>
            <Card>
              <div className="py-5" >
                <Image src={assets.sitecore} alt="sitecore" />
              </div>
            </Card>
          </CardSwap>
        </div>

        <div id='cardswap-mobile' className='mx-auto md:hidden w-full max-w-xl flex justify-center '>
          <CardSwap
            cardDistance={60}
            verticalDistance={55}
            delay={5000}
            pauseOnHover={true}
            skewAmount={0}
          >
            <Card>
              <div className="py-5" >
                <Image src={assets.ai_104} alt="azure" />
              </div>
            </Card>
            <Card>
              <div className="py-5" >
                <Image src={assets.aws} alt="aws" />
              </div>
            </Card>
            <Card>
              <div className="py-5" >
                <Image src={assets.google} alt="google" />
              </div>
            </Card>
            <Card>
              <div className="py-5" >
                <Image src={assets.copilot} alt="copilot" />
              </div>
            </Card>
            <Card>
              <div className="py-5" >
                <Image src={assets.ibm} alt="ibm" />
              </div>
            </Card>
            <Card>
              <div className="py-5" >
                <Image src={assets.sitecore} alt="sitecore" />
              </div>
            </Card>
          </CardSwap>
        </div>

        <div className="md:hidden mt-[-100]" style={{ zIndex: -1 }}>
          <h4 className='mx-auto text-xl text-center my-6 text-white font-jost'>Proficient Tools & Technologies</h4>
            <div className='w-74 mx-auto mt-8 px-5 flex justify-start items-center overflow-x-hidden' style={{
                  maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                }}>
                  <LogoLoop
                        logos={techLogos}
                        speed={30}
                        direction="left"
                        logoHeight={35}
                        gap={35}
                        hoverSpeed={0}
                        scaleOnHover={1.1}
                        fadeOut={false}
                        fadeOutColor="#ffffffff"
                        ariaLabel="Skilled Technologies"
                    />
                </div>
        </div>
        <div className='md:hidden flex flex-col sm:flex-row justify-center items-center gap-6 mt-15'>
                
                <motion.a
                    initial={{ opacity: 1 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                    href="/expertise" className='hero-new-badge-container duration-500 backdrop-blur-sm px-10 py-3 border rounded-full border-white flex items-center text-black gap-2 bg-white'>Applied Skills
                    <Image src={assets.right_arrow_bold_dark} alt="" className='w-4' />
                </motion.a>
            </div>

        </div>
    )
}

export default Certificates
