import { useContext } from "react";
import LocalizationContext from "../LocalizationContext";
import { useNavigate } from 'react-router-dom'


export default function LanguageSwitch() {
  const [language, setLanguage] = useContext(LocalizationContext)
  const navigate = useNavigate();

  const switchLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en")
    navigate("/");
  };

  return (
  <div>
    <button onClick={switchLanguage} className="text-2xl dark:text-white">{language || "no language set"}</button>
  </div>
  )
}
