import './App.css';
import React from 'react';
import Header from './Components/Header.js';
import Content from './Components/Content.js';
import Footer from './Components/Footer.js';
import Drawer from './Components/Drawer.js';


function App() {
  return (
    <div className="App">
      <h1>Steam Dreams App</h1>
      <Header />
      <Content />
      <Drawer />
      <Footer />
  </div>
  );
}

export default App;
