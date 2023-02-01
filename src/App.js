import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume.jsx';
import Projects from './pages/Projects.jsx';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App;
