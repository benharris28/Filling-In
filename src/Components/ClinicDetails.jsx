import React from 'react';
import { Container, Row, Col, Card, Image, Badge, Button } from 'react-bootstrap';

// Connect to context to bring in all required credentials
// Bring in array of all credentials and IDs of each field
// Bring in status of each credential
// Render an "upload" button if the status is empty for new credentials which will need a file picker
// Connect to Airtable
// Post to Airtable when "upload is clicked"
const ClinicDetails = () => {

  const cards = [  
    { image: 'https://res.cloudinary.com/dhkmle6ei/image/upload/v1666205828/GET_10_ykcs3x.png' },  
    { image: 'https://res.cloudinary.com/dhkmle6ei/image/upload/v1666205828/GET_10_ykcs3x.png' },  
    { image: 'https://res.cloudinary.com/dhkmle6ei/image/upload/v1666205828/GET_10_ykcs3x.png' },  
    { image: 'https://res.cloudinary.com/dhkmle6ei/image/upload/v1666205828/GET_10_ykcs3x.png' },  
    { image: 'https://res.cloudinary.com/dhkmle6ei/image/upload/v1666205828/GET_10_ykcs3x.png' },  
    { image: 'https://res.cloudinary.com/dhkmle6ei/image/upload/v1666205828/GET_10_ykcs3x.png' }
  ]

  return (
    <div>
      <h4>Clinic Details</h4>
      <Container>
      <Row>
        {cards.map((card, index) => (
          <Col key={index} xs={12} md={4} lg={2}>
            <Card>
              <Card.Img src={card.image} thumbnail />
              <Card.Body>
                <Badge variant="success">Approved</Badge>
                <Card.Title>License</Card.Title>
                
              </Card.Body>
              <Card.Footer>
                <Button variant="primary">Upload</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default ClinicDetails;
