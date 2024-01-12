import { useState, useEffect, useContext } from 'react'
import profileImage from '../assets/images/profile.png';
import { Link } from 'react-router-dom'
import LocalizationContext from '../LocalizationContext';
import { projectDataEnglish, projectDataFrench } from '/data';
import About from './About';
import { useRef } from 'react';
import { useIsVisible } from '../assets/useIsVisible';

const Home = () => {
  const [ projects, setProjects ] = useState([]);
  const [locale] = useContext(LocalizationContext);

  const ref4 = useRef();
  const isVisible4 = useIsVisible(ref4);

  const ref5 = useRef();
  const isVisible5 = useIsVisible(ref5);

  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  useEffect(() => {
    if(locale === "FR") {
      setProjects(projectDataFrench)
    } else {
      setProjects(projectDataEnglish)
    }
  }, [locale]);

  return (
  <>
      { locale === "FR" ?
    <section id="introPage" className="bg-none text-white relative z-[2] grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14 2xl:px-24">
      <div ref={ref4} className={`transition-opacity ease-in duration-[1200ms] ${isVisible4 ? "opacity-100" : "opacity-0"} flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10`}>
        <h2 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
          Salut ! Je suis <span className="poppins text-rose-400">Jay</span> Gardos <br />
          <span className="poppins text-rose-400">développeuse</span> Back End
        </h2>
        <p className="text-base sm:text-large md:text-xl">
          Mes <span className="text-rose-400">technologies préférées</span> incluent Ruby on Rails, Django, PostgreSQL et React !
        </p>
        <a
          className="cursor-pointer mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-rose-800 hover:text-white duration-300"
          href="https://www.linkedin.com/in/jaygardos/"
          rel='noreferrer'
          target="_blank"
        >
          <h4 className="relative z-9">Reste en contact <i className="mx-1 fa-solid fa-arrow-right" /></h4>
        </a>
      </div>
      <div ref={ref5} className={`transition-opacity ease-in duration-[1200ms] ${isVisible5 ? "opacity-100" : "opacity-0"} grid place-items-center`}>
        <img src={profileImage} alt="Profile" className="object-cover max-h-[50vh] lg:max-w-[50vw] max-w-[90vw]" />
      </div>
    </section>
          :
    <section id="introPage" className="bg-none text-white relative z-[2] grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14 2xl:px-24">
      <div ref={ref4} className={`transition-opacity ease-in duration-[1200ms] ${isVisible4 ? "opacity-100" : "opacity-0"} flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10`}>
        <h2 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
          Hi! I am <span className="poppins text-rose-400">Jay</span> Gardos <br />Back End
          <span className="poppins text-rose-400"> developer</span>
        </h2>
        <p className="text-base sm:text-large md:text-xl">
          My <span className="text-rose-400">favourite tech</span> includes Ruby on Rails Django PostgreSQL
          & React!
        </p>
        <a
          className="cursor-pointer mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-rose-800 hover:text-white duration-300"
          href="https://www.linkedin.com/in/jaygardos/"
          rel='noreferrer'
          target="_blank"
        >
          <h4 className="relative z-9">Get in touch <i className="mx-1 fa-solid fa-arrow-right" /></h4>
        </a>
      </div>
      <div ref={ref5} className={`transition-opacity ease-in duration-[1200ms] ${isVisible5 ? "opacity-100" : "opacity-0"} grid place-items-center`}>
        <img src={profileImage} alt="Profile" className="object-cover max-h-[50vh] lg:max-w-[50vw] max-w-[90vw]" />
      </div>
    </section>
        }

        <About />
    <section id="projects" className="py-20 lg:py-32 flex flex-col gap-24">
          { locale === "FR" ? 

		<div
        ref={ref1}
			className={`transition-opacity ease-in duration-[1200ms] ${isVisible1 ? "opacity-100" : "opacity-0"} flex flex-col py-4 gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-rose-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-rose-700`}
		>
      <div className="flex flex-col gap-2 text-center">
        <h6 className="text-lg sm:text-xl md:text-2xl">Quelques-unes de mes entreprises créatives.</h6>
        <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
          Curieux de <span className="poppins text-rose-400">voir</span> mon travail ?
        </h3>
      </div>
      </div>
        :
		<div
        ref={ref1}
			className={`transition-opacity ease-in duration-[1200ms] ${isVisible1 ? "opacity-100" : "opacity-0"} flex flex-col py-4 gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-rose-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-rose-700`}
		>
      <div className="flex flex-col gap-2 text-center">
        <h6 className="text-lg sm:text-xl md:text-2xl">A few of my creative endeavours.</h6>
        <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
          Curious to <span className="poppins text-rose-400">see</span> my work?
        </h3>
      </div>
      </div>
        }
      <a
          ref={ref2}
        href="https://github.com/Creiwry"
        rel="noreferrer"
        target="_blank"
        className={`transition-opacity ease-in duration-[1200ms] ${isVisible2 ? "opacity-100" : "opacity-0"} group mx-auto delay-100 bg-stone-900 neon-rose px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-rose-700 duration-200`}
      >
          { locale === "FR" ? 
            <p className="text-xl">Visiter mon GitHub</p>
          :
            <p className="text-xl">Visit my Github</p>
        }
        <i className="fa-brands fa-github text-2xl group-hover:text-rose-500 group-hover:animate-pulse delay-100 group-hover:scale-125 duration-500" />
      </a>
      <div ref={ref3} className={`transition-opacity ease-in duration-[1200ms] ${isVisible3 ? "opacity-100" : "opacity-0"} grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10`}>
        {projects.map((project) => (
          <div key={project.id}>
            <Link to={`/project/${project.slug}`} 	
            className="h-full p-4 sm:p-6 group md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-rose-700 text-center group cursor-pointer hover:border-rose-400 duration-300"
           >
            <div
              className="bg-black grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
            >
              <i className={project.icon + " group-hover:text-rose-700 duration-300 group-hover:animate-bounce"} />
            </div>
            <h3 className="font-medium text-xl sm:text-2xl md:text-3xl">{project.name}</h3>
            <p>{project.description}</p>
            <div className="flex-1 flex justify-between gap-4 items-center">
              <div
                className="ml-auto rounded-full cursor-pointer duration-200 relative after:absolute after:top-0 after:right-full after:w-full after:h-full dark:after:bg-white after:bg-rose-800 after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"
              >
                    { locale === "FR" ?
                      <p className="relative z-4 px-2">Accéder <i className="mx-1 fa-solid fa-arrow-right" /></p>
                    :
                      <p className="relative z-4 px-2">Go to <i className="mx-1 fa-solid fa-arrow-right" /></p>
                  }
              </div>
            </div>
          </Link>
          </div>
        ))}
      </div>
    </section>
  </>
  )
}

export default Home;
