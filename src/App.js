import React, { useEffect, useRef } from 'react';
import './App.css';
import Header from "./Header";
import Body from "./Body";
import Projects from "./Projects";
import About from "./About";

function App() {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    const blob = document.getElementById("blob");
    
    if (blob) {
      const handlePointerMove = (event) => {
        const { clientX, clientY } = event;
        blob.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, { duration: 1000, fill: "forwards" });
      };

      document.body.addEventListener('pointermove', handlePointerMove);

      // Cleanup event listener on component unmount
      return () => {
        document.body.removeEventListener('pointermove', handlePointerMove);
      };
    }
  }, []); 

  useEffect(() => {
    const options = {
      threshold: 0.25
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Unobserve to trigger once
        }
      });
    }, options);

    revealRefs.current.forEach(ref => {
      observer.observe(ref);
    });

    return () => {
      revealRefs.current.forEach(ref => observer.unobserve(ref));
    };
  }, []);

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="App">
      <div id="blob"></div>
      <div id="blur"></div>
      <div className="reveal header-container" ref={addToRefs}><Header /></div>
      <div className='container'>
        
        <div className="reveal" ref={addToRefs}><Body /></div>
        <div className="reveal" ref={addToRefs}><Projects /></div>
        <div className="reveal" ref={addToRefs}><About /></div>
      </div>
    </div>
  );
}

export default App;
