import { Routes, BrowserRouter, Route } from 'react-router-dom'
import React, { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Project from './Pages/Project'
import Home from './Components/Home'
import './App.css'
import LocalizationContext from './LocalizationContext'

function App() {
  const [language, setLanguage] = useState("en")

  return (
    <LocalizationContext.Provider value={[language, setLanguage]}>
      <BrowserRouter>
          <div className="relative bg-gray-300 dark:bg-black flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
            <main className="flex flex-col flex-1 p-4">
              <Header />
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
