import React from 'react'
import Typewriter from 'typewriter-effect';
import ScrollableAnchor from 'react-scrollable-anchor'


const Banner = () => {
    let a = "<"
    let b = "/>"

    return (
        <ScrollableAnchor id={'cl'}>
            <div className="intro" height="100%" >
                <div className=" text-white d-flex flex-column align-items-center ">
                    <div >
                        <h1 className="d-flex banner">{a}
                            <Typewriter
                                options={{
                                    strings: [`_I'm from Belgium `, ` _Hi, I'm Ayhan Caliskan `, ` _I'm a Full Stack Developer `],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                            {b}
                        </h1>
                    </div>
                    
                    <button className="btn mt-5 text-white d-flex align-items-end btnx">
                        <a className="text-white" href="#about">A PROPOS DE MOI</a>
                    </button>
                </div>

            </div>
        </ScrollableAnchor>
    )
}

export default Banner