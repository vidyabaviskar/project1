// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
// import GetQuote from './GetQuote'; // Import your Get a Quote form component

// const ContactPage = () => {
//   return (
//     <Container id="contact-us">
//       {/* Header */}
//       <Row className="text-center my-5">
//         <Col>
//           <h1><strong>Contact Us</strong></h1>
//           <h4>We’d love to hear from you! Reach out to us for any queries.</h4>
//         </Col>
//       </Row>

//       {/* Contact Info */}
//       <Row className="my-4">
//         <Col md={6} className="text-center">
//           <h4>Office Location</h4>
//           <p> Dr Ingles Cancer Laparoscopy Clinic & Surgical Hospital, Jalgaon HO, Jalgaon, Maharashtra, 425001</p>
//           <p><a href="tel:+9730189700">+91 97301 89700</a></p>
//           <p><a href="mailto:sales@reegochairs.com">sales@reegochairs.com</a></p>
//         </Col>

//         {/* Social Media Links */}
//         <Col md={6} className="text-center">
//           <h4>Follow Us</h4>
//           <div className="social-icons">
//             <a href="https://www.facebook.com/reegochairs" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
//             <a href="https://instagram.com/reegochairs" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
//             <a href="https://youtube.com/@reegochairs" target="_blank" rel="noopener noreferrer"><FaYoutube size={30} /></a>
//           </div>
//         </Col>
//       </Row>

//       {/* Get a Quote Form */}
//       <Row className="my-4">
//         <Col>
//           <h4>Get a Quote</h4>
//           <GetQuote /> {/* Render your existing Get a Quote form */}
//         </Col>
//       </Row>

//       {/* Optional Map Integration */}
//       <Row className="my-4">
//         <Col className="text-center">
//           <h4>Our Location</h4>
//           {/* <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18..."
//             width="100%"
//             height="300"
//             allowFullScreen=""
//             loading="lazy"
//             title="Reego Location"
//           ></iframe> */}
//           <iframe 
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.9343021816176!2d75.58293747525568!3d20.99527048064565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90f98802fd50b%3A0x4e40a459520535e9!2sK%20J%20PLAST!5e0!3m2!1sen!2sin!4v1728406810834!5m2!1sen!2sin" 
//           width="100%" 
//           height="300" 
//         //   style="border:0;" 
//           allowfullscreen="" 
//           loading="lazy" 
//           title="Reego Location"
//         //   referrerpolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </Col>
//       </Row>

//       {/* Footer */}
//       <Row className="text-center my-5">
//         <Col>
//           <p>© 2024 Reego Chairs. All rights reserved.</p>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ContactPage;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import GetQuote from './GetQuote'; // Ensure this is the correct path to your GetQuote component
import './ContactPage.css'; // Import custom CSS for styling

const ContactPage = () => {
  return (
    <Container id="contact-us" className="contact-page">
      {/* Header */}
      <Row className="text-center my-5">
        <Col>
          <h1 className="display-4 font-weight-bold">Contact Us</h1>
          <h4 className="text-muted">We’d love to hear from you! Reach out to us for any queries.</h4>
        </Col>
      </Row>

      {/* Contact Info with Gradient Background */}
      <Row
        className="my-4 contact-section"
        style={{
          background: 'linear-gradient(to right, #e0f7fa, #b3e5fc)', // Light blue gradient
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        {/* Office Location */}
        <Col md={3} className="text-center">
          <FaMapMarkerAlt size={30} className="mb-2 text-primary" />
          <h5 className="text-primary">Office Location</h5>
          <p>Dr Ingles Cancer Laparoscopy Clinic & Surgical Hospital, Jalgaon HO, Jalgaon, Maharashtra, 425001</p>
        </Col>

        {/* Contact Us */}
        <Col md={3} className="text-center">
          <FaPhoneAlt size={30} className="mb-2 text-primary" />
          <h5 className="text-primary">Contact Us</h5>
          <p><a href="tel:+9730189700" className="text-decoration-none">+91 97301 89700</a></p>
        </Col>

        {/* Email */}
        <Col md={3} className="text-center">
          <FaEnvelope size={30} className="mb-2 text-primary" />
          <h5 className="text-primary">Email</h5>
          <p><a href="mailto:sales@reegochairs.com" className="text-decoration-none">sales@reegochairs.com</a></p>
        </Col>

        {/* Timings */}
        <Col md={3} className="text-center">
          <FaClock size={30} className="mb-2 text-primary" />
          <h5 className="text-primary">Timings</h5>
          <p className="text-muted">Mon-Sun: 9 AM - 9 PM</p>
        </Col>
      </Row>

      {/* Social Media Links */}
      <Row className="my-4">
        <Col className="text-center">
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

      {/* Get a Quote Form */}
      <Row className="my-4">
        <Col>
          <GetQuote /> {/* Ensure this component is working */}
        </Col>
      </Row>

      {/* Map Integration */}
      <Row className="my-4">
        <Col className="text-center">
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

      {/* Footer */}
      <Row className="text-center my-5">
        <Col>
          <p className="text-muted">© 2024 Reego Chairs. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
