import React from 'react';
import './AboutPage.css'; 
import image9 from '../images/image9.jpg';

const AboutPage = () => {
    return (
        <div className="container about-page my-5" id="aboutpage">

            <div className="row align-items-center mb-5">
                <div className="col-md-6 text-center">
                    <div className="profile-pic-container">
                        <img 
                            src={image9}
                            alt="About"
                            className="img-fluid" 
                            height="50%"
                            width="50%"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <h2>About Reego Chairs</h2>
                    <p>
                        Design For Everyday Comfort.
                    </p>
                    <a href="/moreproducts" className="btn btn-primary">Our Products</a>
                    
                </div>
            </div>

            <div className="row">
                
            <div className="col-md-4">
                    <div className="box p-4 text-dark bg-light">
                        <h3>Our Journey</h3>
                        <p>
                        Established in 2020, Reego is a leading plastic-molded furniture manufacturing unit based in Jalgaon. 
                        Over the years, we’ve developed one of the largest product ranges in the market, 
                        offering a 3-year guarantee on selected items. Our commitment to quality is evident in every piece we produce,
                         as we use state-of-the-art imported machines and molds to craft furniture that stands the test of time. 
                         Known for our affordability, we ensure that quality and style are accessible to everyone.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box p-4 text-dark bg-light">
                        <h3>Design Philosophy</h3>
                        <p>
                        At Reego, every piece of furniture is designed with the aim of elevating the personality of the space it occupies. 
                        From living rooms and offices to commercial spaces, our furniture doesn’t just fit into your environment—it enhances it. 
                        Our products are trendsetters, combining style with functionality to create furniture that 
                        complements both modern and traditional interiors.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box p-4 text-dark bg-light">
                        <h3>Our Goals</h3>
                        <p>Our goal is to deliver high-quality, ergonomically designed chairs that combine style, durability, and comfort.</p>
                    </div>
                </div>
                
            </div>
            <div className="md-4">
                    <div className="goal-box p-4 text-dark bg-light">
                        <h3>Owner</h3>
                        <p>Nishikant Madhwani</p><p>Resham Madhwani</p>
                        
                    </div>
                </div>
        </div>
    );
}

export default AboutPage;
