import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'


const Contact = () => {
    return (
        <ScrollableAnchor id={'contact'}>
            <div className="contactme ">
                <div className="container  contactme ">
                    <h3 className="text-center text-white contact font-weight-bold  pt-5">Reach me</h3>
                    <div className="row sen mt-5">
                        <div className="col-lg-4 col-md-4 col-sm-12 mb-5 text-center d-flex flex-column align-items-center">
                            <div className="rouge2 ">
                                <i className="fas fa-map-pin fa-4x mt-4"></i>
                            </div>
                            <h5 className="mt-3 mb-3 font-weight-bold text-uppercase text-danger">où me trouver</h5>
                            <p className="font-weight-bold text-secondary">Place de la Minoterie 12 <br />
                                1080 Molenbeek-St-Jean <br />
                                Bruxelles, BE
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 mb-5 text-center d-flex flex-column align-items-center">
                            <div className="rouge2 ">
                                <i className="fas fa-envelope-open-text mt-4 fa-4x"></i>
                            </div>
                            <h5 className="mt-3 mb-3 font-weight-bold text-uppercase text-danger">ecrivez-moi</h5>
                            <p className="font-weight-bold text-secondary">caliskanayhan@hotmail.fr</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 mb-5 text-center d-flex flex-column align-items-center">
                            <div className="rouge2">
                                <i className="fas fa-phone-volume mt-4 fa-4x"></i>
                            </div>
                            <h5 className="mt-3 mb-3 font-weight-bold text-uppercase text-danger">contactez-moi </h5>
                            <p className="text-white"><span className="font-weight-bold text-secondary">Phone:</span> +34 486 24 59 50</p>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollableAnchor>
    )
}

export default Contact