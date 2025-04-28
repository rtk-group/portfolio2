import React, { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Service from './pages/Service.jsx'
import Contact from './pages/Contact.jsx'
import ScrollReveal from 'scrollreveal';

function App() {

  useEffect(() => {
    // Custom cursor implementation
    const cursor = document.querySelector('.my-cursor');
    if (cursor) {
      const moveCursor = (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;

      }

      const hoverElements = document.querySelectorAll('p, li, a, span');
      hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function () {
          cursor.classList.add('large');
        });

        element.addEventListener('mouseleave', function () {
          cursor.classList.remove('large');
        });
      });

      document.addEventListener('mousemove', moveCursor);
      return () => document.removeEventListener('mousemove', moveCursor);
    }
  }, []);

  useEffect(() => {

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

  }, [])


  useEffect(() => {
    // ScrollReveal initialization
    const sr = ScrollReveal({
      distance: '20px',
      duration: 1500,
      easing: 'ease-in-out',
      mobile: true,
      reset: false
    });

    sr.reveal('.reveal', {
      delay: 200,
      origin: 'bottom',
      interval: 100,
      viewFactor: 0.1
    });

    sr.reveal('.reveal-left', {
      origin: 'left',
      distance: '50px',
      mobile: false
    });

    sr.reveal('.reveal-right', {
      origin: 'right',
      distance: '50px',
      mobile: false
    });

    sr.reveal('.reveal-scale', {
      scale: 0.85
    });

    return () => sr.destroy();
  }, []);


  return (
    <div className="px-4 sm:px-[4vw]">
      <Navbar />
      <Home />
      <Portfolio />
      <About />
      <Service />
      <Contact />
      <div className="hidden z-5 sm:block fixed my-cursor  border-2 bg-black flex justify-center items-center rounded-full mix-blend-difference pointer-events-none"></div>
    </div>
  )
}

export default App
