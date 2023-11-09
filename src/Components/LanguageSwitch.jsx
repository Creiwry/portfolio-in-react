import { useContext } from "react";
import LocalizationContext from "../LocalizationContext";
import { useNavigate } from 'react-router-dom'


export default function LanguageSwitch() {
  const [language, setLanguage] = useContext(LocalizationContext)
  const navigate = useNavigate();

  const switchLanguage = () => {
    setLanguage(language === "EN" ? "FR" : "EN")
    navigate("/");
  };

  return (
  <div>
    <button onClick={switchLanguage} className="text-xl text-white border rounded-lg border-rose-800 p-2 hover:border-rose-400">{language || "no language set"}</button>
  </div>
  )
}
