import { useContext } from 'react';
import LanguageSwitch from './LanguageSwitch'
import { Link } from "react-router-dom"
import LocalizationContext from '../LocalizationContext';

export default function Header(){
  const [locale] = useContext(LocalizationContext);
  return (
    <header
      className='sticky bg-stone-900 neon-rose z-[10] top-0 duration-200 px-6 flex mx-0 items-center justify-between border border-solid py-6 border-transparent'>
      <LanguageSwitch />
      <h1 className="font-medium flex">
        <div className='hover:text-rose-500 hover:animate-spin duration-700 mr-1'>
          <b className="font-bold poppins ml-2">Jay</b>
        </div>
           Gardos</h1>
      <div className="sm:flex ml-auto pr-4 items-center gap-4 hidden">

        { locale === "FR" ?
            <Link to="/" className="duration-200 hover:text-rose-500">Accueil</Link>
            :
            <Link to="/" className="duration-200 hover:text-rose-500">Home</Link>
      }
        <a
          className="relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-rose-800 hover:text-white duration-300"
          href="https://www.linkedin.com/in/jaygardos/"
          target="_blank"
            rel='noreferrer'
        >
        { locale === "FR" ?
            <h4 className="relative z-9">Reste en contact</h4>
            :
            <h4 className="relative z-9">Get in touch</h4>
        }
        </a>
      </div>
    </header>
  )
}
