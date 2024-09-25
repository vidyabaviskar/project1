import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import GetQuote from './components/GetQuote';
import Contact from './components/Contact';
import MoreProducts from './components/MoreProducts';
import ProductDetails from './components/ProductDetails';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import Cart from './components/Cart';
import Testimonial from './components/Testimonial';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
       <Router>
        <NavbarComponent />
        <Routes>
          <Route
            path="/"
            element={
              <Container fluid className="main-content">
                <Home />
                <About />
                <Product />
                <Testimonial />
                <GetQuote />
                <Contact />
              </Container>
            }
          />
          
          <Route
            path="/reego-final"
            element={
              <Container fluid className="main-content">
                <Home />
                <About />
                <Product />
                <Testimonial />
                <GetQuote />
                <Contact />
              </Container>
            }
          />
          
          <Route path="/moreproducts" element={<MoreProducts />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/login" element={<Login />} />

          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminPanel />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
