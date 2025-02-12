import { motion } from 'framer-motion';
import React from 'react';
import { ReactTyped } from "react-typed";
import { fadeIn } from '../Variants';
import resume from '/Ahmed Taha Muhammed.pdf'

export default function Home() {
  console.log(resume);
  
  return (<>
    <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.3}} id='home' className='section pt-28 lg:pt-36 z-10'>
      <div  className='flex flex-col justify-center items-center gap-3'>
      <ReactTyped strings={["Hi All, I'm Ahmed Taha"]} className='headline-1 text-center relative' typeSpeed={50} backSpeed={50} />
      <ReactTyped strings={['Front-End Developer', 'React.Js','Next.Js']} className='headline-2 text-center relative' typeSpeed={100} backSpeed={50} loop={true} loopCount={Infinity} startDelay={1500} showCursor={false}/>
      <p className='headline-4 text-center relative'>Interactive, Responsive, SEO, User-Friendly, Dynamic.</p>
      </div>
      <div className='flex items-center justify-center gap-3 mt-2'>
      <a download="Ahmed Taha Muhammed.pdf" href={resume} target="_blank" aria-label='Download-cv' className="btn btn-primary relative fa-bounce">Download CV <i className="fa-solid fa-download"></i></a>
      <a href="#about" className="btn btn-outline relative fa-bounce">Scroll down <i className="fa-solid fa-arrow-down"></i></a>
      </div>
    </motion.div>
    </>
  )
}
