import React from 'react';

import Loaders from './composants/loaders'
import Banner from './composants/Banner'
import About from './composants/about'
import Competences from './composants/competences'
import Experience from './composants/experience'
import Contact from './composants/contact'

function App() {

  return (
    <div >
      <Loaders />
      <header  >
        <nav className="navbar navbar-expand-lg navbar-light fixed-top text-white p-3" style={{ zIndex: 0 }} >
          <div className="container">
            <a className="navbar-brand text-white" href="#cl">CaliskanAyhan.</a>
            <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span > &#199; </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto ">
                <li className="nav-item">
                  <a className="nav-link text-white" href="#about">About.</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#skill">Skills.</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-white" href="#expe">Expérience.</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white " href="#contact">Contact.</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <Banner />

      <About />

      <Competences />

      <Experience />

      <Contact />
    </div>

  );
}

export default App;
