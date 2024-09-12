import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getStorage, ref, getDownloadURL } from 'firebase/storage'; 

const About = () => {
  const [imageURL1, setImageURL1] = useState(null); 
  const [imageURL2, setImageURL2] = useState(null); 
  const storage = getStorage(); 

  useEffect(() => {
    const imageRef1 = ref(storage, 'Reego Chairs/img27.jpg'); 
    const imageRef2 = ref(storage, 'Reego Chairs/img28.jpg');

    getDownloadURL(imageRef1)
      .then((url) => {
        setImageURL1(url); 
      })
      .catch((error) => {
        console.error('Error fetching image 1 URL:', error);
      });

    getDownloadURL(imageRef2)
      .then((url) => {
        setImageURL2(url); 
      })
      .catch((error) => {
        console.error('Error fetching image 2 URL:', error);
      });
  }, [storage]);

  return (
    <Container id="about" fluid className="mt-5" style={{ marginTop: '100px' }}>
      <Row className="align-items-center justify-content-center">
        <h1 className="text-center" style={{ fontWeight: 'bold', fontSize: '3rem' }}>About Us</h1>
        <Col xs={12} md={6} lg={5} className="text-center">
          <div
            style={{
              backgroundColor: '#e0e0e0',
              width: '100%',
              maxWidth: '300px', 
              height: '400px', 
              margin: '0 auto',
              borderRadius: '20px',
              overflow: 'hidden', 
            }}
          >
            {imageURL1 ? (
              <img
                src={imageURL1}
                alt="About Us"
                style={{
                  width: '100%',
                  height: '100%', 
                  objectFit: 'cover', 
                  borderRadius: '20px',
                }}
              />
            ) : (
              <p>Loading Image...</p>
            )}
          </div>
        </Col>
        <Col xs={12} md={6} lg={5} className="mb-4 text-center text-md-start">
          <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>Reego About Journey :</h1>
          <p style={{ marginTop: '20px', fontSize: '1.2rem' }}>
            Reego is a plastic Moulded Furniture Manufacturing unit based at Jalgaon since 2020.
            Reego is having one of the largest product range Offering 3 year guarantee on selected 
            Products manufactured with imported machines and molds 
            Brand name of reego is having one of the lowest product range.
          </p>
        </Col>
      </Row>

      <Row className="align-items-center justify-content-center">
        <Col xs={12} md={6} lg={5} className="mb-4 text-center text-md-start">
          <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>Reego About Journey :</h1>
          <p style={{ marginTop: '20px', fontSize: '1.2rem' }}>
            Every Reego unit is a trendsetter of its own right, oozing with style and functionality to
            enhance the personality of the space it is in—living rooms, offices, commercial spaces, and 
            every other space you can think of.
          </p>
        </Col>
        <Col xs={12} md={6} lg={5} className="mb-5 text-center text-md-start">
          <div
            style={{
              backgroundColor: '#e0e0e0',
              width: '100%',
              maxWidth: '300px', 
              height: '400px', 
              margin: '0 auto',
              borderRadius: '20px',
              overflow: 'hidden', 
            }}
          >
            {imageURL2 ? (
              <img
                src={imageURL2}
                alt="Our Journey"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover', 
                  borderRadius: '20px',
                }}
              />
            ) : (
              <p>Loading Image...</p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
