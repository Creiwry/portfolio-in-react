import { useContext } from 'react';
import LanguageSwitch from './LanguageSwitch'
import { Link } from "react-router-dom"
import LocalizationContext from '../LocalizationContext';

export default function Header(){
  const [locale] = useContext(LocalizationContext);
  return (
    <header
      className='sticky bg-stone-900 neon-rose z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid py-6 bg-transparent border-transparent'>
      <LanguageSwitch />
      <h1 className="font-medium"><b className="font-bold poppins ml-2">Jay</b> Gardos</h1>
      <div className="sm:flex ml-auto pr-4 items-center gap-4 hidden">

        { locale === "FR" ?
            <Link to="/" className="duration-200 hover:text-rose-500">Accueil</Link>
            :
            <Link to="/" className="duration-200 hover:text-rose-500">Home</Link>
      }
        <a
          className="relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
          href="https://www.linkedin.com/in/jaygardos/"
          target="_blank"
            rel='noreferrer'
        >
          <div
            className="absolute top-0 right-full w-full h-full bg-rose-400 opacity-40 group-hover:translate-x-full z-0 duration-200"
          />
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
