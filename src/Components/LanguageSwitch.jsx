import { useContext } from "react";
import LocalizationContext from "../LocalizationContext";

export default function LanguageSwitch() {
  const [language, setLanguage] = useContext(LocalizationContext)

  const switchLanguage = () => {
    setLanguage(language === "EN" ? "FR" : "EN")
  };

  return (
  <div>
    <button onClick={switchLanguage} className="text-xl delay-50 duration-200 text-white border rounded-lg border-rose-800 p-2 hover:border-rose-400">{language || "no language set"}</button>
  </div>
  )
}
