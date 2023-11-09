import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Project from './Pages/Project'
import Home from './Components/Home'
import './App.css'
import LocalizationContext from './LocalizationContext'

function App() {
  const [language, setLanguage] = useState("EN")

  return (
    <LocalizationContext.Provider value={[language, setLanguage]}>
      <BrowserRouter>
          <div className="relative flex flex-col mx-auto w-full max-w-none items-stretch text-sm sm:text-base min-h-screen">
          <Header />
            <main className="flex flex-col flex-1 p-4 2xl:px-32">
              <Routes>
                <Route path="/project/:projectSlug" element={<Project />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </main>
            <Footer />
          </div>
      </BrowserRouter>
    </LocalizationContext.Provider>
  )
}

export default App
