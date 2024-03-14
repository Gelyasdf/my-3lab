import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Content from './components/Content';

function App() {
  const [currentLab, setCurrentLab] = useState('Lab 1');
  const labs = ['Lab 1', 'Lab 2', 'Lab 3']; // список лабораторных работ

  const handleLabClick = (lab) => {
    setCurrentLab(lab);
  };

  return (
    <div className="App">
      <Header />
      <Menu labs={labs} handleClick={handleLabClick} />
      <Content currentLab={currentLab} />
      <Footer />
    </div>
  );
}

export default App;