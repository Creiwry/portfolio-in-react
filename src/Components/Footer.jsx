import { useContext } from "react";
import LocalizationContext from "../LocalizationContext";

export default function Footer() {

  const [locale] = useContext(LocalizationContext);
  return (
  <footer
    className="py-20 z-[2] sm:py-32 bg-stone-950 border-t border-solid border-rose-950 flex flex-col gap-4 sm:gap-8 justify-center items-center"
  >
    { locale === "FR" ?
        <p className="px-4 peer py-2 bg-white text-slate-950 font-medium"> Me connecter &darr;</p>
    :
        <p className="px-4 peer py-2 bg-white text-slate-950 font-medium">Connect with me &darr;</p>
    }
    <div className="flex peer-hover:neon-rose duration-500 p-5 border-black rounded-lg flex-col gap-4 items-center justify-center">
      <p><b className="pr-2">Email:</b> jay.gardos@outlook.com</p>
      <p>
        <b className="pr-2">Github:</b>
        <a className="text-rose-400 group hover:text-lg duration-500" href="https://github.com/Creiwry" rel='noreferrer' target="_blank"
          >Creiwry <sup
            ><span className="text-xs scale-75 pl-0.5"
              ><i className="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%] group-hover:scale-100 group-hover:animate-pulse duration-500" /></span
            ></sup
          ></a
        >
      </p>
      <p>
        <b className="pr-2">LinkedIn:</b>
        <a className="text-rose-400 group hover:text-lg duration-500" href="https://www.linkedin.com/in/jaygardos/" rel='noreferrer' target="_blank"
          >Jay Gardos <sup
            ><span className="text-xs scale-75 pl-0.5"
              ><i className="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%] group-hover:scale-100 group-hover:animate-pulse duration-500" /></span
            ></sup
          ></a
        >
      </p>
    </div>
  </footer>
  )
}
