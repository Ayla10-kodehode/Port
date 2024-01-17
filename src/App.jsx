import './App.css'
import {HashRouter, Route, Link } from 'react-router-dom';
import { Navbar } from './components/navbar/nav';
import { Home } from './components/Sections/Home';
import { About } from './components/Sections/About';
import { Projects } from './components/Sections/Projects';
import { Contact } from './components/Sections/Contact';

function App() {
  

  return (
    <>
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
    </>
  )
}

export default App
