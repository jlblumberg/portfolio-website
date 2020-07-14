import React from 'react';
import styles from './App.module.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';

function App() {
  return (
    <div className={styles.flexContainer}>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Work />
    </div>
  );
}

export default App;
