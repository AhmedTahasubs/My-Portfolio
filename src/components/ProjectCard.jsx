import { motion } from 'framer-motion';
import { fadeIn } from '../Variants';
export default function ProjectCard({imgSrc, title, tags, githubLink, demoLink, classes}) {
  return (
    <motion.div variants={fadeIn('up',0.2)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.1}} className={"relative product-card p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors "+ classes}>
      <figure className='img-box object-contain rounded-lg mb-4 overflow-hidden'>
        <a href={demoLink} target="_blank">
        <img src={imgSrc} alt={title} className='img-cover hover:scale-110 transition-all duration-500' loading='lazy' />
        </a>
      </figure>
      <div className="flex items-center justify-between gap-4">
        <div>
            <h3 className="title-1 mb-3">
                {title}
            </h3>
            <div className="flex flex-wrap items-center gap-2">
                {tags.map((label, key) => <span className='h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg' key={key}>{label}</span>)}
            </div>
        </div>

      </div>
      <div className="flex mt-2 gap-4">
              <a href={demoLink} target='_blank' className="rounded-lg grid place-items-center btn-secondary btn shrink-0">
                  <span className=''  aria-hidden="true"><i className="fa-solid fa-link"></i> Demo</span>
              </a>
              <a href={githubLink} target='_blank' className="rounded-lg grid place-items-center bg-zinc-950 btn shrink-0 active:bg-transparent">
                  <span className='' aria-hidden="true"><i className="fa-brands fa-github"></i> GitHub</span> 
              </a>
      </div>
    </motion.div>
  )
}
