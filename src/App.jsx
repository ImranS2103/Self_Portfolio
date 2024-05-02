import React from 'react'
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'
function App() {
  return (
    <div className='app'>
      <Home />
      <About />
      <Resume />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
};
export default App;