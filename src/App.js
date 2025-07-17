import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Qualifications from './components/Qualifications';
import Education from './components/Education';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleToggleDarkMode = () => setDarkMode((d) => !d);

  return (
    <div className={`App${darkMode ? ' dark' : ''}`}>
      <Header onToggleDarkMode={handleToggleDarkMode} darkMode={darkMode} />
      <About />
      <Qualifications />
      <Education />
      <Experience />
      <Publications />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
