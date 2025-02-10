import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../Variants';
export default function Skills() {
    const skills =[
        {
        icon:"icons8-javascript.svg"
        ,logoName:"JavaScript",
        },
        {
        icon: "icons8-html.svg"
        ,logoName:"Html",
        },
        {
        icon: "icons8-css.svg"
        ,logoName:"Css",
        },
        {
        icon:"icons8-react.svg"
        ,logoName:"React.Js",
        },
        {
        icon:"icons8-bootstrap.svg"
        ,logoName:"Bootstrap",
        },
        {
        icon:"icons8-tailwind-css.svg"
        ,logoName:"TailwindCss",
        },
        {
        icon:"icons8-jquery.svg"
        ,logoName:"jQuery",
        },
        {
        icon:"icons8-typescript.svg"
        ,logoName:"TypeScript",
        },
        {
        icon:"icons8-github.svg"
        ,logoName:"Github",
        },
        {
        icon:"icons8-redux.svg"
        ,logoName:"Redux",
        },
        {
        icon:"next.svg"
        ,logoName:"Next.Js",
        },
        {
        icon:"icons8-figma.svg"
        ,logoName:"Figma",
        },
        {
        icon:"material.svg"
        ,logoName:"MUI",
        },
        {
        icon:"framer-motion.svg"
        ,logoName:"Framer",
        },
    ]



  return (
    <section id='skills' className='section pt-28 lg:pt-36 container'>
      <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}}>
            <h2 className="headline-2 mt-3 max-w-[50ch] relative">
            Essential Tools I use
            </h2>
            <p className='text-zinc-400 relative'>Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>
      </motion.div>
    <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.7}} className="relative mt-8 m-auto w-full overflow-hidden  before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,#18181b,rgba(0,0,0,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] rounded-lg after:-scale-x-100 after:bg-[linear-gradient(to_right,#18181b,rgba(255,255,255,0)_100%)] after:content-['']">
      <div className='flex flex-row justify-center items-center gap-3 animate-infinite-slider w-[calc(350px*10)]'>
        {skills.map(({icon,logoName},key)=>
                    <div key={key} className='flex flex-col items-center slide w-[125px]  justify-center fa-fade'>
                    <img src={icon} alt={logoName} className='h-24 w-24'/>
                    <h1 className='headline-4 '>{logoName}</h1>
            </div>
        )}
        {skills.map(({icon,logoName},key)=>
                    <div key={key} className='flex flex-col items-center slide w-[125px]  justify-center fa-fade'>
                    <img src={icon} alt={logoName} className='h-24 w-24 '/>
                    <h1 className='headline-4'>{logoName}</h1>
            </div>
        )}

      </div>
      </motion.div>

    </section>
  )
}
