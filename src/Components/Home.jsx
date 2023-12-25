import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import LocalizationContext from '../LocalizationContext';
import { projectDataEnglish, projectDataFrench } from '/data';

const Home = () => {
  const [ projects, setProjects] = useState([]);
  const [locale] = useContext(LocalizationContext);

  useEffect(() => {
    console.log(locale)
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
      <div className="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
        <h2 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
          Salut ! Je suis <span className="poppins text-rose-400">Jay</span> Gardos <br />
          <span className="poppins text-rose-400">développeuse</span> Back End
        </h2>
        <p className="text-base sm:text-large md:text-xl">
          Mes <span className="text-rose-400">technologies préférées</span> incluent Ruby on Rails, Django, PostgreSQL et React !
        </p>
        <a
          className="violetShadow cursor-pointer mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
          href="https://www.linkedin.com/in/jaygardos/"
          rel='noreferrer'
          target="_blank"
        >
          <div
            className="absolute top-0 right-full w-full h-full bg-rose-400 opacity-40 group-hover:translate-x-full z-0 duration-200"
          />
          <h4 className="relative z-9">Reste en contact <i className="mx-1 fa-solid fa-arrow-right" /></h4>
        </a>
      </div>
      <div className="grid place-items-center">
        <img src='https://drive.google.com/uc?export=view&id=1kCPmxptKQcfRAoDpun8NDft55mC8KvXs' alt="Profile" className="object-cover max-h-[70vh] max-w-[780px]" />
      </div>
    </section>
          :
    <section id="introPage" className="bg-none text-white relative z-[2] grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14 2xl:px-24">
      <div className="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
        <h2 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
          Hi! I am <span className="poppins text-rose-400">Jay</span> Gardos <br />Back End
          <span className="poppins text-rose-400"> developer</span>
        </h2>
        <p className="text-base sm:text-large md:text-xl">
          My <span className="text-rose-400">favourite tech</span> includes Ruby on Rails Django PostgreSQL
          & React!
        </p>
        <a
          className="violetShadow cursor-pointer mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
          href="https://www.linkedin.com/in/jaygardos/"
          rel='noreferrer'
          target="_blank"
        >
          <div
            className="absolute top-0 right-full w-full h-full bg-rose-400 opacity-40 group-hover:translate-x-full z-0 duration-200"
          />
          <h4 className="relative z-9">Get in touch <i className="mx-1 fa-solid fa-arrow-right" /></h4>
        </a>
      </div>
      <div className="grid place-items-center">
        <img src='https://drive.google.com/uc?export=view&id=1kCPmxptKQcfRAoDpun8NDft55mC8KvXs' alt="Profile" className="object-cover max-h-[70vh] max-w-[780px]" />
      </div>
    </section>
        }

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      {projects.map((project) => (
        <div key={project.id}>
          <Link to={`/project/${project.slug}`} 	
          className="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-rose-700 text-center group cursor-pointer hover:border-rose-400 duration-200"
         >
          <div
            className="bg-black grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
          >
            <i className={project.icon} />
          </div>
          <h3 className="font-medium text-xl sm:text-2xl md:text-3xl">{project.name}</h3>
          <p>{project.description}</p>
          <div className="flex-1 flex justify-between gap-4 items-center">
            <div
              className="ml-auto rounded-full cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:w-full after:h-full dark:after:bg-white after:bg-rose-500 after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"
            >
              <p className="relative z-4 px-2">Accéder <i className="mx-1 fa-solid fa-arrow-right" /></p>
            </div>
          </div>
        </Link>
        </div>
      ))}
    </div>
  </>
  )
}

export default Home;
