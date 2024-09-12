import React from "react";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


const Contact = () => {
  return (
    <Container id="contact">
    <div className="container text-center mt-5">
      <h2>Contact Us</h2>
      <div className="d-flex justify-content-center my-4">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/reegochairs"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light rounded-circle mx-2 d-flex justify-content-center align-items-center"
          style={{ width: "80px", height: "80px" }}
        >
          <FaFacebookF size={30} />
        </a>


        {/* Instagram */}
        <a
          href="https://www.instagram.com/reegochairs"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light rounded-circle mx-2 d-flex justify-content-center align-items-center"
          style={{ width: "80px", height: "80px" }}
        >
          <FaInstagram size={30} />
        </a>

        {/* Youtube */}
        <a
          href="https://www.youtube.com/@reegochairs"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light rounded-circle mx-2 d-flex justify-content-center align-items-center"
          style={{ width: "80px", height: "80px" }}
        >
          <FaYoutube size={30} />
        </a>

        {/* Email */}
        <a
          href="mailto:sales@reegochairs.com"
          className="btn btn-light rounded-circle mx-2 d-flex justify-content-center align-items-center"
          style={{ width: "80px", height: "80px" }}
        >
          <MdEmail size={30} />
        </a>

        {/* Phone */}
        <a
          href="tel:+9730189700"
          className="btn btn-light rounded-circle mx-2 d-flex justify-content-center align-items-center"
          style={{ width: "80px", height: "80px" }}
        >
          <FaPhoneAlt size={30} />
        </a>
        </div>
    </div>
    </Container>
  );
};

export default Contact;
