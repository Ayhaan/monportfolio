import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import ScrollAnimation from 'react-animate-on-scroll';




const About = () => {
    return (

        <ScrollAnimation animateIn='fadeIn'
            duration={2.5}
        >
            <ScrollableAnchor id={'about'}>
                <div className="container mt-5 aboutme ">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 text-center mt-5 ">
                            <img className="img mt-5" src="/img/photo-1581978846964-d3ee3ed0bed1.jpeg" alt="" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
                            <p className="about  text-center mt-5">ABOUT.</p>
                            <hr />
                            <p>Je m'appelle <span className="text-dark font-weight-bold">Ayhan Caliskan</span> née le 04 mai 1997. Je vis en Belgique là ou j'effectue une formation dans la quelle j'acqueris les compétences nécaissaires pour devenir <span className="text-dark font-weight-bold">Full Stack Dévlopeur.</span> <br />
                             Je suis une personne simple, créative, enthousiaste et amusante. J'aime toujours créer quelque chose par moi-même qui soit utile pour les autres.</p>
                            <hr />
                            <p className="about  text-center">INFORMATIONS PERSONNELLES.</p>
                            <div className="row mt-4">
                                <div className="col-6">
                                    <p><span className="font-weight-bold text-dark">Name :</span> Ayhan Caliskan</p>
                                    <p><span className="font-weight-bold text-secondary">Age :</span> 22 years</p>
                                    <p><span className="font-weight-bold text-dark">Email :</span> Caliskanayhan@hotmail.fr</p>
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
                                <i className="fab fa-facebook-f fa-3x p-2  ml-2"></i>
                                <i className="fab fa-instagram fa-3x p-2 ml-2"></i>
                                <i className="fab fa-github fa-3x p-2  ml-2"></i>
                                {/* <i className="fas fa-laptop-code fa-3x p-2  ml-2"></i> */}
                                <i className="fab fa-linkedin-in fa-3x p-2 ml-2"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollableAnchor>
        </ScrollAnimation>

    )
}

export default About
