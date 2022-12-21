import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ClinicDetails = () => {
  return (
    <div>
      <h4>Clinic Details</h4>
    <Container fluid>
      <Row>
        <Col xs={12} md={4} lg={2}>
          <Card>
            <Card.Body>
              Card 1
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} lg={2}>
          <Card>
            <Card.Body>
              Card 2
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} lg={2}>
          <Card>
            <Card.Body>
              Card 3
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} lg={2}>
          <Card>
            <Card.Body>
              Card 4
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} lg={2}>
          <Card>
            <Card.Body>
              Card 5
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} lg={2}>
          <Card>
            <Card.Body>
              Card 6
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ClinicDetails;
