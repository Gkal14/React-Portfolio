import React from 'react'
import './App.css';

import Home from "./components/Home"
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export function App() {
  return (
    <main>
      <Nav/> 
      <Home/>
      <About/>
      <Projects/>
      <Footer/>
    </main>
  );
}

export default App;
