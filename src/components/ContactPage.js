import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import GetQuote from './GetQuote'; 
import './ContactPage.css'; 

const ContactPage = () => {
  return (
    <Container id="contact-us" className="contact-page">
      <Row className="text-center my-5">
        <Col md={12} className="text-center">
          <h1 className="display-4 font-weight-bold">Contact Us</h1>
          <h4 className="text-muted">We’d love to hear from you! Reach out to us for any queries.</h4>
        </Col>
      </Row>

      <Row className="my-4 contact-section" style={{ background: 'linear-gradient(to right, #e0f7fa, #b3e5fc)', padding: '20px', borderRadius: '10px' }}>
        <Col md={3} className="text-center">
          <FaMapMarkerAlt size={30} className="mb-2 text-primary" />
          <h5 className="text-primary">Office Location</h5>
          <p>Dr Ingles Cancer Laparoscopy Clinic & Surgical Hospital, Jalgaon HO, Jalgaon, Maharashtra, 425001</p>
        </Col>

        <Col md={3} className="text-center">
          <FaPhoneAlt size={30} className="mb-2 text-primary" />
          <h5 className="text-primary">Contact Us</h5>
          <p><a href="tel:+9730189700" className="text-decoration-none">+91 97301 89700</a></p>
        </Col>

        <Col md={3} className="text-center">
          <FaEnvelope size={30} className="mb-2 text-primary" />
          <h5 className="text-primary">Email</h5>
          <p><a href="mailto:sales@reegochairs.com" className="text-decoration-none">sales@reegochairs.com</a></p>
        </Col>

        <Col md={3} className="text-center">
          <FaClock size={30} className="mb-2 text-primary" />
          <h5 className="text-primary">Timings</h5>
          <p className="text-muted">Mon-Sun: 9 AM - 9 PM</p>
        </Col>
      </Row>

      <Row className="my-4">
        <Col md={12} className="text-center">
          <h4 className="text-secondary">Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/reegochairs" target="_blank" rel="noopener noreferrer" className="social-link mx-2">
              <FaFacebook size={30} />
            </a>
            <a href="https://instagram.com/reegochairs" target="_blank" rel="noopener noreferrer" className="social-link mx-2">
              <FaInstagram size={30} />
            </a>
            <a href="https://youtube.com/@reegochairs" target="_blank" rel="noopener noreferrer" className="social-link mx-2">
              <FaYoutube size={30} />
            </a>
          </div>
        </Col>
      </Row>

      <Row className="my-4 justify-content-center">
        <Col md={8} className="d-flex justify-content-center">
          <GetQuote />
        </Col>
      </Row>

      <Row className="my-4 justify-content-center">
        <Col md={8} className="text-center">
          <h4 className="text-secondary">Our Location</h4>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.9343021816176!2d75.58293747525568!3d20.99527048064565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90f98802fd50b%3A0x4e40a459520535e9!2sK%20J%20PLAST!5e0!3m2!1sen!2sin!4v1728406810834!5m2!1sen!2sin" 
            width="100%" 
            height="300" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            title="Reego Location"
          ></iframe>
        </Col>
      </Row>

      <Row className="text-center my-5">
        <Col md={8} className="text-center">
          <p className="text-muted">© 2024 Reego Chairs. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
