import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import MoreProducts from './components/MoreProducts';
import ProductDetails from './components/ProductDetails';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import Cart from './components/Cart';
import Testimonial from './components/Testimonial';
import Gallery from './components/Gallery';
import PrivateRoute from './components/PrivateRoute';
import ChairPage from './pages/ChairPage'; 
import TablePage from './pages/TablePage'; 
import TableChairSetPage from './pages/TableChairSetPage'; 
import StoolsPage from './pages/StoolsPage'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { Container } from 'react-bootstrap';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import './App.css';


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
                <Contact />
              </Container>
            }
          />
          
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
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
          <Route path="/category/chair" element={<ChairPage />} />
          <Route path="/category/table" element={<TablePage />} />
          <Route path="/category/table-chair-set" element={<TableChairSetPage />} />
          <Route path="/category/stools" element={<StoolsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
