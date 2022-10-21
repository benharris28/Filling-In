import React from 'react';
import ApiContext from '../ApiContext'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";



class ShiftListing extends React.Component {
  render() {
    const shifts = [
      {
        id: 1,
        title: 'This is a title',
        clinic_name: 'Test Clinic 1'
      },
      {
        id: 2,
        title: 'Another job title',
        clinic_name: 'Test Clinic 2'
      }
    ]

    return (
      <div>
        <Container>
          Shift Listing Page
          <div>
            {shifts.map(shift =>

              <Card key={shift.id}>
                <Card.Header>Shift</Card.Header>
                <Card.Body>
                  <Card.Title>{shift.title}</Card.Title>
                  <Card.Text>
                    {shift.clinic_name}
                  </Card.Text>
                  <Link to={`/shifts/${shift.id}`}>
                    <Button variant="primary">More Details</Button>
                  </Link>
                  
                </Card.Body>
              </Card>
            )}
          </div>
        </Container>

      </div>
    )
  }
}

export default ShiftListing;