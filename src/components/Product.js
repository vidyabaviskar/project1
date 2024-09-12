import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import img1 from '../img1.jpg'; 
import ReactCardSlider from 'react-card-slider-component';
import './Product.css'; 

const sliderClick = (title) => {
  alert(`Clicked on ${title}`);
};

const Product = () => {
  const navigate = useNavigate();

  const handleViewMoreClick = () => {
    navigate('/moreproducts');
  };

  const slides = [
    { image: img1, title: "Product 1", description: "This is a description", clickEvent: () => sliderClick("This is a title") },
    { image: img1, title: "Product 2", description: "This is a second description", clickEvent: () => sliderClick("This is a second title") },
    { image: img1, title: "Product 3", description: "This is a third description", clickEvent: () => sliderClick("This is a third title") },
    { image: img1, title: "Product 4", description: "This is a fourth description", clickEvent: () => sliderClick("This is a fourth title") },
    { image: img1, title: "Product 5", description: "This is a fifth description", clickEvent: () => sliderClick("This is a fifth title") },
    { image: img1, title: "Product 6", description: "This is a sixth description", clickEvent: () => sliderClick("This is a sixth title") },
    { image: img1, title: "Product 7", description: "This is a seventh description", clickEvent: () => sliderClick("This is a seventh title") },
  ];

  return (
    <Container className="mt-5" id="product" style={{ textAlign: 'center' }}>
      <h1>Our Products</h1>
      
      <ReactCardSlider slides={slides} />

      <div style={{ marginBottom: '20px' }}></div> 
      <Button variant="primary" size="lg" onClick={handleViewMoreClick}>
        View More
      </Button>
    </Container>
  );
};

export default Product;
