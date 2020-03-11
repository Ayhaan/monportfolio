import React, { useState, useEffect } from 'react'
import Typist from 'react-typist';

const Loaders = () => {
    let a = "{  "
    let b = "  }"
    let [nombre, setNombre] = useState("4%")


    useEffect(() => {
        let interval = setTimeout(() => {
            switch (nombre) {
                case "4%":
                    setNombre("18%")
                    break;
                case "18%":
                    setNombre("32%")
                    break;
                case "32%":
                    setNombre("51%")
                    break;
                case "51%":
                    setNombre("74%")
                    break;
                case "74%":
                    setNombre("92%")
                    break;
                case "92%":
                    setNombre("100%")
                    break;
                default:
                case "100%":
                    clearTimeout(interval)
                    break;
            }
        }, 1000)

    }, [nombre])

    let [test, setTest] = useState("d-block")

    setInterval(() => {
        setTest("d-none")
    }, 10000)

    return (
        <div className={`${test}`} style={{ position: "absolute", zIndex:"+10"}}>
            <div className={`${nombre === "100%" ? "fade" : ""}`} style={{ position: "fixed", width: "100%" }}>
                <div className="loader d-flex flex-column justify-content-center " >
                    <h2 id="texte" className="text-white text-center container test">

                        <Typist>
                            <Typist.Delay ms={1500} />
                            {/* <Typist.Backspace count={1} delay={1500} /> */}
                            Hello, I'm Ayhan Caliskan. <br />
                            Welcome on my Portfolio.
                             </Typist>
                    </h2>
                    <div className="loader2 d-flex justify-content-center mt-5" >
                        <span className={"span"}> {a}  </span>
                        <label className="mt-2" >
                            {nombre}
                        </label>
                        <span className={"span1"}> {b} </span>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Loaders