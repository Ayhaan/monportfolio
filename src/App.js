import React from 'react';

import Loaders from './composants/loaders'
import Banner from './composants/Banner'
import About from './composants/about'
import Competences from './composants/competences'
import MiniBaner from './composants/minibaner'
import Contact from './composants/contact'


function App() {

  return (
    <div >
      {/* <Loaders/> */}
      <header  >
        <nav className="navbar navbar-expand-lg navbar-light fixed-top text-white p-3" style={{ zIndex: 1 }} >
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
                {/* <li className="nav-item ">
                  <a className="nav-link text-white" href="#expe">Expérience.</a>
                </li> */}
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
      <MiniBaner />
      <Competences />
      <Contact />

      <footer className="footer">
        <div className="text-center  d-flex flex-column ">
          <div>
            <button className="btn btn-link text-decoration-none pl-3 pr-3 text-white mt-2 p-0">
              <a href="#cl"><i className="foot fas fa-angle-double-up text-white "></i></a>
            </button>
          </div>
          <div>
            <button className="btn btn-link text-decoration-none text-white p-0" >
              <a className="text-white text-decoration-none foot " href="#cl">BACK TO TOP</a>
            </button>
          </div>
          <div className="mt-3 d-flex justify-content-center ">
            <a className="text-secondary" rel="noopener noreferrer" target='_blank' href="https://www.facebook.com/profile.php?id=100007741965143"><i className="fab fa-facebook-f fa-3x p-2  ml-2"></i></a>
            <a className="text-secondary" rel="noopener noreferrer" target='_blank' href="https://www.instagram.com/ayhn.cl/"><i className="fab fa-instagram fa-3x p-2 ml-2"></i></a>
            <a className="text-secondary" rel="noopener noreferrer" target='_blank' href="https://github.com/Ayhaan"><i className="fab fa-github fa-3x p-2  ml-2"></i></a>
            <a className="text-secondary" rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/in/ayhan-caliskan-718a46138/"><i className="fab fa-linkedin-in fa-3x p-2 ml-2"></i></a>
          </div>
          <p className="mt-3 text-white">
            <span className="font-weight-bold text-secondary mr-3">All Rights Reserved.</span>
            <span>&#x7C;</span>
            <span className="font-weight-bold text-secondary ml-3">&copy;</span>opyright 2020.
            <span className="ml-3">&#x7C;</span>
            <span className="font-weight-bold text-secondary ml-3">By</span> Ayhan Caliskan.
          </p>
        </div>
      </footer>

    </div>

  );
}

export default App;
