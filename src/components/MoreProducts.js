import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';  
import './MoreProducts.css';

const MoreProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const docRef = doc(db, 'product-info', 'Products');

    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();

        const names = data['name '] || [];
        const descriptions = data.description || [];
        const weights = data.weight || [];
        const guarantees = data.guarantee || [];
        const imageURLs = data.imageURL || [];

        const productsArray = names.map((name, index) => ({
          name: name,
          description: descriptions[index],
          weight: weights[index],
          guarantee: guarantees[index],
          imageURL: imageURLs[index],
        }));

        setProducts(productsArray);
      } else {
        console.log('No product data available.');
        setProducts([]);
      }
      setLoading(false);
    }, (error) => {
      console.error('Error fetching product data:', error);
      setError('Failed to fetch product data.');
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  return (
    <Container className="mt-4" id="moreproducts">
      <h1>Our Products</h1>
      <Row>
        {products.length > 0 ? (
          products.map((product, index) => (
            <Col lg={4} md={6} sm={12} key={index} className="mb-4">
              <Card className="product-card h-100">
                <div className="image-container">
                  <Card.Img
                    variant="top"
                    src={product.imageURL}
                    alt={product.name}
                    className="card-img"
                  />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text><b>Weight:</b> {product.weight}, <b>Guarantee:</b> {product.guarantee}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <p>No products available.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default MoreProducts;
