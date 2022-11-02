import React, { useContext } from 'react';
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
import ShiftApiService from '../Services/shift-api-service';



class ShiftListing extends React.Component {
  state = {
    shifts: []
  }

  componentDidMount = () => {
    ShiftApiService.getAllShifts()
      .then(res => {
      this.setState({
        shifts: res.records
      })
    })
  }
  

  
  render() {
    
    const shifts = this.state.shifts
    console.log(this.state)

    return (
      <div className="mt-3">
        <Container>
          <div className="mb-4">
            <h1>Shift Listing Page</h1>
          </div>
          
         
          <Row>
            <Col className="border" xs={12} md={3}>
              <div>
                Filter
              </div>
              
            </Col>
            <Col xs={12} md={9}>
          <div>
            {shifts.map(shift =>

              <Card className="mb-2" key={shift.id}>
                <Card.Header>Shift</Card.Header>
                <Card.Body>
                  <Card.Title>{shift.fields.shift_title}</Card.Title>
                  <Card.Text>
                    {shift.fields.clinic_name}
                  </Card.Text>
                  <Link to={`/shifts/${shift.fields.id}`}>
                    <Button variant="primary">More Details</Button>
                  </Link>
                  
                </Card.Body>
              </Card>
            )}
          </div>
              </Col>
            </Row>
        </Container>

      </div>
    )
  }
}

export default ShiftListing;