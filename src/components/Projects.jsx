import ProjectCard from './ProjectCard';


export default function Projects() {
  const works = [
    {
      imgSrc: '/images/Fresh-Cart.png',
      title: 'Fresh-Cart E-commerce app ',
      tags: ['React', 'API', 'Responsive','Tailwind','Context','Axios','Formik','YUP','Dark & Light mode'],
      githubLink: 'https://github.com/AhmedTahasubs/Fresh-Cart.git',
      demoLink: 'https://fresh-cart-tawny-phi.vercel.app/',
    },
    {
      imgSrc: '/images/Yummy.png',
      title: 'Yummy Recipe App',
      tags: ['HTML', 'CSS','JavaScript','API','Responsive','Bootstrap','OOP'],
      githubLink: 'https://github.com/AhmedTahasubs/Yummy',
      demoLink: 'https://ahmedtahasubs.github.io/Yummy/',
    },
    {
      imgSrc: '/images/quiz.png',
      title: 'Quiz App',
      tags: ['HTML', 'CSS','JavaScript','API','Responsive','Bootstrap','OOP'],
      githubLink: 'https://github.com/AhmedTahasubs/Quiz-App',
      demoLink: 'https://ahmedtahasubs.github.io/Quiz-App/',
    },
    {
      imgSrc: '/images/games.png',
      title: 'Game Reviews',
      tags: ['HTML', 'CSS','JavaScript','API','Responsive','Bootstrap'],
      githubLink: 'https://github.com/AhmedTahasubs/GameReviews',
      demoLink: 'https://ahmedtahasubs.github.io/GameReviews/',
    },
    {
      imgSrc: '/images/weather.png',
      title: 'Weather App',
      tags: ['HTML', 'CSS','JavaScript','API','Responsive','Bootstrap'],
      githubLink: 'https://github.com/AhmedTahasubs/WeatherApp',
      demoLink: 'https://ahmedtahasubs.github.io/WeatherApp/',
    },
    {
      imgSrc: '/images/bookmarks.png',
      title: 'Bookmarks',
      tags: ['HTML', 'CSS','JavaScript','Responsive','Bootstrap'],
      githubLink: 'https://github.com/AhmedTahasubs/BookMarks',
      demoLink: 'https://ahmedtahasubs.github.io/BookMarks/',
    },
  ];
  return (
  <>
      <section  id='projects' className='section pt-28 lg:pt-36 z-10'>
        <div  className="container">
          <h2 className='headline-2 mb-8'>My portfolio highlights</h2>
          <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(288px,_1fr))]'>
            {works.map(({imgSrc, title, tags, githubLink, demoLink},key)=>
              <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} githubLink={githubLink} demoLink={demoLink} />
            )}
          </div>
        </div>
      </section>
  </>
  )
}

    // <div className='relative'>
    //   <details name='accordion' className='transition-all'>
    //     <summary>Project 1</summary>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto itaque vero impedit ipsa aliquid similique eaque officiis ipsam officia provident repudiandae ipsum est fugit maxime debitis molestiae incidunt laboriosam libero magni, reiciendis placeat dolorem quaerat. Alias iure dolores ipsum. Placeat officiis nihil dolores dignissimos voluptates fugit autem quos quasi labore.
    //   </details>
    // </div>
//     import ProjectCard from './ProjectCard';
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// export default function Projects() {
//   const works = [
//     {
//       imgSrc: '/images/Fresh-Cart.png',
//       title: 'Fresh-Cart E-commerce app ',
//       tags: ['React', 'API', 'Responsive','Tailwind','Context','Axios','Formik','YUP','Dark & Light mode'],
//       githubLink: 'https://github.com/AhmedTahasubs/Fresh-Cart.git',
//       demoLink: 'https://fresh-cart-tawny-phi.vercel.app/',
//     },
//     {
//       imgSrc: '/images/Yummy.png',
//       title: 'Yummy Recipe App',
//       tags: ['HTML', 'CSS','JavaScript','API','Responsive','Bootstrap','OOP'],
//       githubLink: 'https://github.com/AhmedTahasubs/Yummy',
//       demoLink: 'https://ahmedtahasubs.github.io/Yummy/',
//     },
//     {
//             imgSrc: '/images/quiz.png',
//             title: 'Quiz App',
//             tags: ['HTML', 'CSS','JavaScript','API','Responsive','Bootstrap','OOP'],
//             githubLink: 'https://github.com/AhmedTahasubs/Quiz-App',
//             demoLink: 'https://ahmedtahasubs.github.io/Quiz-App/',
//           },
//           {
//             imgSrc: '/images/games.png',
//             title: 'Game Reviews',
//             tags: ['HTML', 'CSS','JavaScript','API','Responsive','Bootstrap'],
//             githubLink: 'https://github.com/AhmedTahasubs/GameReviews',
//             demoLink: 'https://ahmedtahasubs.github.io/GameReviews/',
//           },
//           {
//             imgSrc: '/images/weather.png',
//             title: 'Weather App',
//             tags: ['HTML', 'CSS','JavaScript','API','Responsive','Bootstrap'],
//             githubLink: 'https://github.com/AhmedTahasubs/WeatherApp',
//             demoLink: 'https://ahmedtahasubs.github.io/WeatherApp/',
//           },
//           {
//             imgSrc: '/images/bookmarks.png',
//             title: 'Bookmarks',
//             tags: ['HTML', 'CSS','JavaScript','Responsive','Bootstrap'],
//             githubLink: 'https://github.com/AhmedTahasubs/BookMarks',
//             demoLink: 'https://ahmedtahasubs.github.io/BookMarks/',
//           },
//   ];

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <>
//       <motion.ul animate={{ rotate: 360 }} />
//       <section id='projects' className='section pt-28 lg:pt-36 z-10'>
//         <div className="container">
//           <h2 className='headline-2 mb-8'>My portfolio highlights</h2>
//           <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(288px,_1fr))]'>
//             {works.map(({ imgSrc, title, tags, githubLink, demoLink }, key) => {
//               const ref = useRef(null);
//               const inView = useInView(ref, { once: false }); // Set once to true to animate only once

//               return (
//                 <motion.div
//                   key={key}
//                   ref={ref}
//                   variants={cardVariants}
//                   initial="hidden"
//                   animate={inView ? "visible" : "hidden"}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <ProjectCard
//                     imgSrc={imgSrc}
//                     title={title}
//                     tags={tags}
//                     githubLink={githubLink}
//                     demoLink={demoLink}
//                   />
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }