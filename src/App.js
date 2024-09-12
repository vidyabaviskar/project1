import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import GetQuote from './components/GetQuote';
import Contact from './components/Contact';
import MoreProducts from './components/MoreProducts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';


function App() {

  return (
    <div className="App">
      <NavbarComponent />
      <Container fluid className="main-content">
        <Home />
        
        
        <div style={{ marginBottom: '30px' }}></div> 
        
        <About />

        <Router>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/moreproducts" element={<MoreProducts />} />
      </Routes>
    </Router>
        <GetQuote />
        <Contact />
        
      </Container>
    </div>
  );
}

export default App;

