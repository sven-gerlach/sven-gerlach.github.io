import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Navbar/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './components/LandingPage/LandingPage'
import About from './../src/components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'

// use react-reveal for revealing / fading

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path='/'>
          <LandingPage />
          <About />
          <Skills />
          <Projects />
          <Resume />
        </Route>
      </main>
    </Router>
  )
}

export default App;
