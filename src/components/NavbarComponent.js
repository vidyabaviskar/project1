import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../logo.png';
import './NavbarComponent.css';

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavCollapse = () => setExpanded(false);

  return (
    <Navbar expanded={expanded} onToggle={setExpanded} expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom-nav-links">
            <Nav.Link href="#home" onClick={handleNavCollapse}>Home</Nav.Link>
            <Nav.Link href="#about" onClick={handleNavCollapse}>About</Nav.Link>
            <Nav.Link href="#product" onClick={handleNavCollapse}>Product</Nav.Link>
            <Nav.Link href="#contact" onClick={handleNavCollapse}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;