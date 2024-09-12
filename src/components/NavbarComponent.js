import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../logo.png'; 
import './NavbarComponent.css'; 

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavCollapse = () => setExpanded(false);

  return (
    <Navbar expanded={expanded} onToggle={setExpanded} expand="lg" style={{ backgroundColor: 'lightblue', height: '80px' }}>
      <Container>
        <div className="d-flex w-100 justify-content-between align-items-center" style={{ height: '100%' }}>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" style={{ width: '25%', height: 'auto' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom-nav-links" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            <Nav.Link href="#home" onClick={handleNavCollapse} style={{ color: 'darkblue' }}>Home</Nav.Link>
            <Nav.Link href="#about" onClick={handleNavCollapse} style={{ color: 'darkblue' }}>About</Nav.Link>
            <Nav.Link href="#product" onClick={handleNavCollapse} style={{ color: 'darkblue' }}>Product</Nav.Link>
            <Nav.Link href="#contact" onClick={handleNavCollapse} style={{ color: 'darkblue' }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
