import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Qualifications from './components/Qualifications';
import ExperienceTimeline from './components/ExperienceTimeline';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Content from './components/Content';
import Activity from './components/Activity';
import Achievements from './components/Achievements';
import BioTimeline from './components/BioTimeline';
import NewsletterSignup from './components/NewsletterSignup';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import AccentColorPicker from './components/AccentColorPicker';

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
      <AccentColorPicker />
      <Header onToggleDarkMode={handleToggleDarkMode} darkMode={darkMode} />
      <About />
      <Qualifications />
      <ExperienceTimeline />
      <Publications />
      <Projects />
      <Content />
      <Activity />
      <Achievements />
      <BioTimeline />
      <NewsletterSignup />
      <Contact />
      <Chatbot />
    </div>
  );
}

export default App;
