import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../logo.png';
const Home = () => {
  return (
    <Container id="home" fluid className="mt-5">
      <Row className="align-items-center justify-content-center">
        <Col xs={12} md={6} lg={5} className="mb-4 text-center text-md-start">
          <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>Reego</h1>
          <h2 style={{ fontWeight: 'lighter', fontSize: '2rem' }}>Design for everyday Comfort</h2>
          <p style={{ marginTop: '20px', fontSize: '1.2rem' }}>
            At Reego, we make your ideas come to life with our furniture. 
            Whether it's modern chairs, stylish tables, or useful storage, 
            we combine smart design with cool style to make your space both amazing and useful
          </p>
        </Col>
        <Col xs={12} md={6} lg={5} className="text-center">
          <img
            src={logo}
            alt="Reego description"
            className="img-fluid"
            style={{ borderRadius: '20px', maxHeight: '700px', objectFit: 'cover', width: '100%' }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
