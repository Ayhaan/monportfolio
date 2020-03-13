import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import ScrollAnimation from 'react-animate-on-scroll';




const About = () => {
    return (

        <ScrollAnimation animateIn='fadeIn'
            duration={2.5}>

            <ScrollableAnchor id={'about'}>
                <section className="container mt-5 aboutme ">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 text-center mt-5 ">
                            <img className="img mt-5" src="/img/photo-1581978846964-d3ee3ed0bed1.jpeg" alt="" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
                            <p className="about  text-center mt-5">QUI SUIS-JE?</p>
                            <hr />
                            <p>Je m'appelle <span className="text-dark font-weight-bold">Ayhan Caliskan</span> né le 04 mai 1997. Je vis en Belgique là où j'effectue une formation dans laquelle j'acqueris les compétences nécessaires pour devenir <span className="text-dark font-weight-bold">Full Stack Dévlopeur.</span> <br />
                             Je suis une personne <span className="text-dark font-weight-bold">autonome</span>, <span className="text-dark font-weight-bold">créative</span>, <span className="text-dark font-weight-bold">enthousiaste </span> et <span className="text-dark font-weight-bold">curieuse</span> . J'aime toujours créer quelque chose par moi-même qui soit utile pour les autres.</p>
                            <hr />
                            <p className="about  text-center">INFORMATIONS PERSONNELLES</p>
                            <div className="row mt-4">
                                <div className="col-6">
                                    <p><span className="font-weight-bold text-dark">Name :</span> Ayhan Caliskan</p>
                                    <p><span className="font-weight-bold text-secondary">Years :</span> 22 years</p>
                                    <p><span className="font-weight-bold text-dark">Email :</span> caliskanayhan@hotmail.fr</p>
                                </div>
                                <div className="col-6">
                                    <p><span className="font-weight-bold text-secondary">Phone :</span> +3486255950</p>
                                    <p><span className="font-weight-bold text-dark">Adress :</span> Belgium</p>
                                    <p><span className="font-weight-bold text-secondary">Hobby :</span> Footsal, Coding</p>
                                </div>
                            </div>
                            <hr />
                            <div className='text-center mt-4'>
                                <button className="btn bg-secondary mr-2 mt-1 "> <a className="text-decoration-none text-white" href="#contact">ME CONTACTER</a> </button>
                                <button className='btn bg-dark mt-1 ml-2 text-white'>TELECHARGER MON CV</button>
                            </div>
                            <div className="mt-4 d-flex justify-content-center">
                                <a className="text-dark" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100007741965143"><i className="fab fa-facebook-f fa-3x p-2  ml-2"></i></a>
                                <a className="text-dark" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/ayhn.cl/"><i className="fab fa-instagram fa-3x p-2 ml-2"></i></a>
                                <a className="text-dark" rel="noopener noreferrer" target="_blank" href="https://github.com/Ayhaan"><i className="fab fa-github fa-3x p-2  ml-2"></i></a>
                                <a className="text-dark" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/ayhan-caliskan-718a46138/"><i className="fab fa-linkedin-in fa-3x p-2 ml-2"></i></a>
                            </div>
                        </div>
                    </div>
                </section>

            </ScrollableAnchor>
        </ScrollAnimation>

    )
}

export default About
