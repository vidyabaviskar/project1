import React from "react";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Contact = () => {
  const buttonStyle = {
    width: "80px",
    height: "80px",
    backgroundColor: "#ffffff", 
    border: "2px solid #1e90ff", 
    color: "#1e90ff", 
    transition: "background-color 0.3s, color 0.3s, transform 0.3s",
    fontSize: "1.5rem" 
  };

  const hoverStyle = {
    backgroundColor: "#1e90ff", 
    color: "#ffffff", 
    transform: "scale(1.1)" 
  };

  return (
    <Container id="contact" className="text-center mt-5" style={{ padding: "2rem 0", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}>
      <h2 className="mb-4" style={{ color: "#333333", fontSize: "2rem", fontWeight: "bold" }}>Contact Us</h2>
      <div className="d-flex justify-content-center my-4">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/reegochairs"
          target="_blank"
          rel="noopener noreferrer"
          className="btn rounded-circle mx-2 d-flex justify-content-center align-items-center"
          style={buttonStyle}
          onMouseOver={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
          onMouseOut={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
        >
          <FaFacebookF />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/reegochairs"
          target="_blank"
          rel="noopener noreferrer"
          className="btn rounded-circle mx-2 d-flex justify-content-center align-items-center"
          style={buttonStyle}
          onMouseOver={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
          onMouseOut={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
        >
          <FaInstagram />
        </a>

        {/* Youtube */}
        <a
          href="https://www.youtube.com/@reegochairs"
          target="_blank"
          rel="noopener noreferrer"
          className="btn rounded-circle mx-2 d-flex justify-content-center align-items-center"
          style={buttonStyle}
          onMouseOver={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
          onMouseOut={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
        >
          <FaYoutube />
        </a>

        {/* Email */}
        <a
          href="mailto:sales@reegochairs.com"
          className="btn rounded-circle mx-2 d-flex justify-content-center align-items-center"
          style={buttonStyle}
          onMouseOver={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
          onMouseOut={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
        >
          <MdEmail />
        </a>

        {/* Phone */}
        <a
          href="tel:+9730189700"
          className="btn rounded-circle mx-2 d-flex justify-content-center align-items-center"
          style={buttonStyle}
          onMouseOver={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
          onMouseOut={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
        >
          <FaPhoneAlt />
        </a>
      </div>
    </Container>
  );
};

export default Contact;
