import React from 'react';
import './AboutPage.css'; 
import image1 from '../images/image1.jpg';

const AboutPage = () => {
    return (
        <div className="container about-page my-5" id="aboutpage">

            <div className="row align-items-center mb-5">
                <div className="col-md-6 text-center">
                    <div className="profile-pic-container">
                        <img 
                            src={image1}
                            alt="About"
                            className="rounded-circle img-fluid" 
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <h2>About Reego Chairs</h2>
                    <p>
                        Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. 
                        Lobortis elementum nibh tellus molestie nunc non. Aliquet bibendum.
                    </p>
                    <a href="/moreproducts" className="btn btn-primary">Our Products</a>
                    
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="box p-4 text-dark bg-light">
                        <h3>Design for Everyday Comfort</h3>
                        <p>
                        At Reego, we transform your vision into reality with our innovative furniture. 
                        Whether it's modern chairs, sleek tables, or functional storage solutions, 
                        our products blend smart design with chic style, making your space both beautiful and practical. 
                        We strive to provide comfort and elegance in every piece, ensuring that your home or 
                        office is not only stylish but also highly functional.
                        </p>
                    </div>
                </div>
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
            </div>
        </div>
    );
}

export default AboutPage;
