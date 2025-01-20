import { motion } from 'framer-motion';
import { fadeIn } from '../Variants';
export default function Footer() {
    const sitemap = [
        {
          label: 'Home',
          href: '#home'
        },
        {
          label: 'About',
          href: '#about'
        },
        {
          label: 'Skills',
          href: '#skills'
        },
        {
          label: 'Projects',
          href: '#projects'
        },
        {
          label: 'Contact me',
          href: '#contact'
        }
      ];
      
      const socials = [
        {
          label: 'GitHub',
          href: 'https://github.com/AhmedTahasubs'
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/ahmedtahamuhammed'
        },
        {
          label: 'WhatsApp',
          href: 'https://wa.me/201113795716'
        },
        {
          label: 'Gmail',
          href: 'mailto:ahmedtahaamuhammed@gmail.com'
        }
      ];
  return (
    <>
      <motion.footer variants={fadeIn("up",0.2)} initial="hidden" whileInView={'show'} viewport={{once:false,amount:0.1}} className="section pt-28 lg:pt-36">
        <div className="container ">
            <div className="lg:grid lg:grid-cols-2 ">
                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[15ch] relative">
                    Let's work Together Today!
                    </h2>
                    <a href="https://wa.me/201113795716" target="_blank" className="btn btn-primary relative fa-beat">Start Project <i className="fa-solid fa-chevron-right"></i></a>
                </div>
                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div>
                        <p className="mb-2 relative">Sitemap</p>
                        <ul>
                            {sitemap.map(({label,href},key)=>(<li key={key}> <a href={href} className="block relative text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">{label}</a></li>))}
                        </ul>
                    </div>
                    <div className="">
                        <div>
                            <p className="mb-2 relative">Socials</p>
                            <ul>
                                {socials.map(({label,href},key)=>(<li key={key}> <a href={href} target="_blank" className="block relative text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">{label}</a></li>))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between pt-10 mb-8 ">
                <a href="/" ><img src="icons8-react.svg" width={40} height={40} alt="logo" className="relative" /></a>
                <p className="text-zinc-500 text-sm relative">&copy; 2025 <span className="text-zinc-200 ">Made with ❤ by Ahmed Taha</span></p>
            </div>
        </div>
      </motion.footer>
    </>
  )
}
