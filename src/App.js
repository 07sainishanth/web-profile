import './App.css';
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
  return (
    <div className="App">
      <Header />
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
