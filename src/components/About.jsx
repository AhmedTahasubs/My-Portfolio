import { motion } from 'framer-motion';
import React from 'react'
import { fadeIn } from '../Variants';

export default function About() {
  return (
    <section id='about' className='section pt-28 lg:pt-36'>
    <div className='container lg:grid lg:grid-cols-2'>
        <motion.p variants={fadeIn('left',0.5)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.2}} className='headline-3 text-center lg:text-left ' >Highly motivated and enthusiastic frontend developer with a strong foundation in HTML, CSS,
            JavaScript and React. Proficient in building responsive, interactive, and scalable web
            applications using modern frontend technologies. Eager to learn and grow with a team, and
            passionate about creating visually appealing and user-friendly interfaces.
        </motion.p>
        <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.2}} className='flex flex-col items-center justify-center gap-3 mt-2'>
            <ul>
                <li className='flex items-center mt-4'>
                <span className='w-12 h-12 grid relative place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zing-50/80'><i className="fa-regular fa-user fa-beat-fade"></i></span>
                <p className='ml-2 headline-4 relative'>Ahmed Taha Muhammed</p>
                </li>
                <li className='flex items-center mt-4'>
                <span className='w-12 h-12 grid relative place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zing-50/80'><i className="fa-solid fa-location-dot fa-beat-fade"></i></span>
                <p className='ml-2 headline-4 relative'>Suez, Egypt</p>
                </li>
                <li className='flex items-center mt-4'>
                <span className='w-12 h-12 grid relative place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zing-50/80'><i className="fa-brands fa-whatsapp fa-beat-fade"></i></span>
                <p className='ml-2 headline-4 relative'>+201113795716</p> 
                </li>
                <li className='flex items-center mt-4'>
                <span className='w-12 h-12 grid relative place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zing-50/80'><i className="fa-solid fa-g fa-beat-fade"></i></span>
                <p className='ml-2 headline-5 relative'>ahmedtahaamuhammed@gmail.com</p>
                </li>
            </ul>
        </motion.div>
    </div>
  </section>
  )
}
