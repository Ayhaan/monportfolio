import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import ScrollAnimation from 'react-animate-on-scroll';


const Competences = () => {

    // const [etoile, setEtoile] = useState(0)
    // const [etoile1, setEtoile1] = useState(0)

    // let hoveretoile = () => {
    //     setEtoile(1)
    // }
    // let hoveretoileX = () => {
    //     setEtoile(0)
    // }

    return (
        <ScrollAnimation animateIn='fadeInUp'
            duration={2}>
            <ScrollableAnchor id={'skill'}>
                <div className="row m-5 skill border rounded  ">
                    <div className="col-12 mt-5">
                        <h3 className="text-center myskill font-weight-bold mt-5">My Skills</h3>

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
                        <h3 className="mt-4 text-center myskill font-weight-bold">Portfolio</h3>
                        {/* <div className="d-flex justify-content-center">
                            <button className="btn-danger border rounded pr-3 pl-3">html/Css</button>
                            <button className="btn-danger border rounded pr-3 pl-3">JavaScript</button>
                            <button className="btn-danger border rounded pr-3 pl-3">Bootstrap</button>
                            <button className="btn-danger border rounded pr-3 pl-3">React</button>
                            <button className="btn-danger border rounded pr-3 pl-3">Laravel</button>
                        </div> */}
                        {/* <div className="container">
                            <div className="row ">
                                <div className="empo col-lg-4 col-md-12 col-sm-12" ></div>
                                <div className="chef col-lg-4 col-md-12 col-sm-12" ></div>
                                <div className="flaty col-lg-4 col-md-12 col-sm-12" ></div>

                            </div>

                        </div> */}
                        {/* <div className="row mx-auto" >
                            <div className="empoo col-lg-4 col-md-12 col-sm-12 mt-2 "></div>
                            <div className="cheef col-lg-4 col-md-12 col-sm-12 mt-2 "></div>
                            <div className="flaaty col-lg-4 col-md-12 col-sm-12 mt-2"></div>
                        </div> */}
                        <div className="container-fluid mt-4">
                            <div className="row ">
                                <div className="col-lg-6 col-md-6 col-sm-12 ">
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
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </ScrollableAnchor>

        </ScrollAnimation>
    )
}

export default Competences