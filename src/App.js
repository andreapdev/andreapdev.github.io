import React from 'react';

//Components
import Header from './components/Header';
import Nav from './components/Nav';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';

//Styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav/>
      <main>
        <AboutMe />
        <Contact />
        <Skills />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
