import React, { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Service from './pages/Service.jsx'
import Contact from './pages/Contact.jsx'
import customcursor from './assets/assets.js'
import ScrollReveal from 'scrollreveal';

function App() {

  const scrollrevealfun = () => {
    ScrollReveal().reveal('.reveal', {
      delay: 200,
      distance: '20px',
      duration: 1500,
      easing: 'ease-in-out',
      origin: 'bottom',
      interval: 100,
      viewFactor: 0.1,
      reset: false,
      mobile: true
    });

    ScrollReveal().reveal('.reveal-left', {
      origin: 'left',
      distance: '50px',
      mobile: false,
      reset: true
    });
    ScrollReveal().reveal('.reveal-right', {
      origin: 'right',
      distance: '50px',
      mobile: false,
      reset: true
    });

    ScrollReveal().reveal('.reveal-scale', {
      scale: 0.85,
      duration: 1500,
      reset: false
    });
  }

  const scrollsmooth = () => {
    document.querySelectorAll('li a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
          behavior: 'smooth'
        })
      });
    });
  }

  useEffect(() => {
    customcursor()
    scrollsmooth()
    scrollrevealfun()
  }, [])




  return (
    <div className="px-4 sm:px-[4vw]">
      <Navbar />
      <Home />
      <Portfolio />
      <About />
      <Service />
      <Contact />
      <div className="hidden z-5 sm:block fixed my-cursor  border bg-white flex justify-center items-center rounded-full mix-blend-difference pointer-events-none"></div>
    </div>
  )
}

export default App
