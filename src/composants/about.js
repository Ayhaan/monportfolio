import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'


const About = () => {
    return (
        <ScrollableAnchor id={'about'}>
            <div>
 
 
                <div class="mb-3 d-flex justify-content-center">
                    <i className="fab fa-facebook-f fa-5x p-2 text-primary"></i>
                    <i className="fab fa-instagram fa-5x p-2"></i>
                    <i class="fab fa-github fa-5x p-2 text-summery"></i>
                    <i className="fas fa-laptop-code fa-5x p-2 text-succes"></i>
                    <i class="fab fa-linkedin-in fa-5x p-2 text-succes"></i>
                </div>

            </div>
        </ScrollableAnchor>
    )
}

export default About
