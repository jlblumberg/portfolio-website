import React from 'react';
import styles from './App.module.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <div className={styles.flexContainer}>
      <Navbar/>
      <Header/>
      <About/>
    </div>
  );
}

export default App;
