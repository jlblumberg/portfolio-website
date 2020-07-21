import React from 'react';
import styles from './App.module.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className={styles.flexContainer}>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
