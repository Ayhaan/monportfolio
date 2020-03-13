import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import ScrollAnimation from 'react-animate-on-scroll';


const Competences = () => {

    return (
        <ScrollAnimation animateIn='fadeInUp'
            duration={2}>
            <ScrollableAnchor id={'skill'}>
                <section className="row m-5 skill border rounded  ">
                    <div className="col-12 mt-5">
                        <h3 className="text-center myskill font-weight-bold mt-5">MY SKILLS</h3>

                        <div className="container mt-4  ">
                            <div className="row d-flex justify-content-center ">
                                <div className="col-lg-5 col-sm-12 col-md-5 ">

                                    <div className="d-flex justify-content-end">
                                        <div className="text-secondary " >
                                            <h2 className="text-right">HTML</h2>
                                            <div >
                                                <i className=" rouge fas fa-star fa-2x"></i><i className="rouge fas fa-star fa-2x"></i><i className="rouge fas fa-star fa-2x"></i><i className=" rouge fas fa-star fa-2x"></i><i className="far fa-star fa-2x"></i>
                                            </div>
                                        </div>
                                        <div className=" logo text-center ml-3" >
                                            <i className="fab fa-html5 fa-2x mt-4 "></i>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-end mt-4">
                                        <div className="text-secondary text-right"  >
                                            <h2>Responsive</h2>
                                            <div >
                                                <i className=" rouge fas fa-star fa-2x"></i><i className="rouge fas fa-star fa-2x"></i><i className="rouge fas fa-star fa-2x"></i><i className=" rouge fas fa-star fa-2x"></i><i className=" rouge fas fa-star fa-2x"></i>
                                            </div>
                                        </div>
                                        <div className=" logo text-center ml-3 " >
                                            <i className="fas fa-mobile-alt fa-2x mt-4 "></i>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-end mt-4">
                                        <div className="text-secondary text-right">
                                            <h2>React</h2>
                                            <div >
                                                <i className=" rouge fas fa-star fa-2x"></i><i className="rouge fas fa-star fa-2x"></i><i className="rouge fas fa-star fa-2x"></i><i className="far fa-star fa-2x"></i><i className="far fa-star fa-2x"></i>
                                            </div>
                                        </div>
                                        <div className=" logo text-center ml-3">
                                            <i className="fab fa-react fa-2x mt-4 "></i>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-end mt-4">
                                        <div className="text-secondary">
                                            <h2>WordPress</h2>
                                            <p className=" font-weight-bold font-italic text-center">Coming Soon...</p>
                                        </div>
                                        <div className=" logo text-center ml-3">
                                            <i className="fab fa-wordpress fa-2x mt-4 "></i>
                                        </div>
                                    </div>
                                </div>

                                {/* COL a DROITE */}
                                <div className="col-lg-5 col-sm-12 col-md-5">

                                    <div className="d-flex " >
                                        <div className=" logo text-center mr-3" >
                                            <i className="fab fa-css3-alt fa-2x mt-4"></i>
                                        </div>
                                        <div className="text-secondary" >
                                            <h2  >CSS3</h2>
                                            <div >
                                                <i className=" rouge fas fa-star fa-2x"></i><i className="rouge fas fa-star fa-2x"></i><i className="rouge fas fa-star fa-2x"></i><i className=" rouge fas fa-star fa-2x"></i><i className="far fa-star fa-2x"></i>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="d-flex mt-4">
                                        <div className=" logo text-center mr-3 " >
                                            <i className="fab fa-js-square fa-2x mt-4"></i>
                                        </div>
                                        <div className="text-secondary">
                                            <h2>JavaScript</h2>
                                            <div >
                                                <i className=" rouge fas fa-star fa-2x"></i><i className="rouge fas fa-star fa-2x"></i><i className="rouge fas fa-star fa-2x"></i><i className=" rouge fas fa-star-half-alt fa-2x"></i><i className="far fa-star fa-2x"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex mt-4">
                                        <div className=" logo text-center mr-3" >
                                            <i className="fab fa-laravel fa-2x mt-4 "></i>
                                        </div>
                                        <div className="text-secondary">
                                            <h2>Laravel</h2>
                                            <div >
                                                <i className=" rouge fas fa-star fa-2x"></i><i className="rouge fas fa-star fa-2x"></i><i className="rouge fas fa-star fa-2x"></i><i className="far fa-star fa-2x"></i><i className="far fa-star fa-2x"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex mt-4">
                                        <div className=" logo text-center mr-3">
                                            <i className="fas fa-photo-video fa-2x mt-4"></i>
                                        </div>
                                        <div className="text-secondary">
                                            <h2>PhotoShop</h2>
                                            <p className=" font-weight-bold font-italic text-center">Coming Soon...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col-12 mt-5 mb-5">
                        <h3 className="mt-4 text-center myskill font-weight-bold">PORTFOLIO</h3>
                        <div className="container-fluid mt-4">
                            <div className="row mt-4">
                                {/* <div className="col-lg-6 col-md-6 col-sm-12 ">
                                    <a href="#skill"><img className="empo mx-auto d-block mt-4 border rounded" src="/img/Site Screen/Emporium.png" alt="Emporium" /></a>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <a href="#skill"><img className="empo mx-auto d-block mt-4 border rounded" src="/img/Site Screen/SiteDuChef.png" alt="Emporium" /></a>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <a href="#skill"><img className="empo mx-auto d-block mt-4 border rounded" src="/img/Site Screen/Youcommunik.png" alt="Emporium" /></a>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <a href="#skill"><img className="empo mx-auto d-block mt-4 border rounded" src="/img/Site Screen/Grayscale.png" alt="Emporium" /></a>
                                </div> */}
                                <div className="col-lg-6 block mb-5 p-0 ">

                                    <a href="#skill"><img className="empo d-block mt-4 mx-auto " src="/img/Site Screen/Emporium.png" alt="Emporium" /></a>
                                    <div className="left">Emporium</div>
                                    <div className="right mt-2">Js/Html/Css/Sass/Bootstrap</div>

                                </div>
                                
                                <div className="col-lg-6 block mb-5 p-0 ">
                                    <a href="#skill"><img className="empo mx-auto d-block mt-4 " src="/img/Site Screen/SiteDuChef.png" alt="Emporium" /></a>
                                    <div className="left">Site du Chef</div>
                                    <div className="right mt-2">Html/Css/Sass/Bootstrap</div>
                                </div>
                                <div className="col-lg-6 block mb-5  p-0 ">
                                    <a href="#skill"><img className="empo mx-auto  d-block mt-4 " src="img/Site Screen/Youcommunik.png" alt="Emporium" /></a>
                                    <div className="left">YoucommuniK</div>
                                    <div className="right mt-2">Html/Css/Bootstrap</div>
                                </div >
                                <div className="col-lg-6 block mb-5 p-0 ">
                                    <a href="#skill"><img className="empo mx-auto d-block mt-4" src="img/Site Screen/Grayscale.png" alt="Emporium" /></a>
                                    <div className="left">Grayscale</div>
                                    <div className="right mt-2">Html/Css/Bootstrap</div>
                                </div>


                            </div>
                        </div>
                    </div>
                </section>

            </ScrollableAnchor>

        </ScrollAnimation>
    )
}

export default Competences