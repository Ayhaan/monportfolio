import React from 'react'
import Typewriter from 'typewriter-effect';
import ScrollableAnchor from 'react-scrollable-anchor'


const Banner = () => {
    let a = "<"
    let b = ">"

    return (
        <ScrollableAnchor id={'cl'}>
            <div className="intro" height="100%" >
                <div className=" text-white d-flex flex-column align-items-center ">
                    <div >
                        <h1 className="d-flex banner">{a}
                            <Typewriter
                                options={{
                                    strings: [`/ Welcome on my Portfolio `, `/ Hi, I'm Ayhan Caliskan  `, `/ I'm a Belgian Full Stack Developer `],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                            {b}
                        </h1>
                    </div>
                    {/* <div className="parentfleche d-flex justify-content-center">

                        <i class="fas fa-angle-double-down m-2"></i>

                    </div> */}
                    <button className="btn mt-5 text-white d-flex align-items-end btnx">
                        <a className="text-white" href="#about">A PROPOS DE MOI <i className="fas fa-angle-double-down "></i></a>
                    </button>
                </div>

            </div>
        </ScrollableAnchor>
    )
}

export default Banner