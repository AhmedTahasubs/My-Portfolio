import ProjectCard from './ProjectCard';


export default function Projects() {
  const works = [
    {
      imgSrc: '/images/social.png',
      title: 'Social Media App',
      tags: ['Next.Js','TypeScript', 'Responsive','Tailwind','Material UI','API','Axios','Formik','Flowbite','YUP'],
      githubLink: 'https://github.com/AhmedTahasubs/Next.js-Social-App',
      demoLink: 'https://next-js-social-app-nine.vercel.app/',
    },
    {
      imgSrc: '/images/Admin.png',
      title: 'Admin Dashboard App',
      tags: ['React.Js', 'JavaScript','Responsive','Tailwind','Framer-Motion','Lucide-React','React-Router','Recharts'],
      githubLink: 'https://github.com/AhmedTahasubs/Admin-Dashboard',
      demoLink: 'https://admin-dashboard-ten-ochre.vercel.app/',
    },
    {
      imgSrc: '/images/Fresh-Cart.png',
      title: 'Fresh-Cart E-commerce app ',
      tags: ['React.Js','JavaScript', 'API', 'Responsive','Tailwind','Context','Axios','Formik','YUP','Dark & Light mode'],
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
      tags: ['HTML', 'CSS','JavaScript','OOP','API','Responsive','Bootstrap'],
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