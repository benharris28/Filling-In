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
import Airtable from 'airtable';



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

    const airtable = new Airtable({ apiKey: 'keyP9Ri1WHoSEV5W1' }).base('appHZw8p3zb6QrFz3');

      // Get user's status from Airtable
      airtable('Shifts')
        .select({
          filterByFormula: `{uuid} = "${this.state.shift_id}"`
        })
        .firstPage((err, records) => {
          if (err) {
            console.error(err);
            return;
          }

          const record = records[0];
          
          this.setState({
            shift: record
        });
        }
                   );}

    
  
  

  
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
                    <div>City: {shift.fields.city}</div>
                    <div>Date: {shift.fields.start_date}</div>
                  </Card.Text>
                  <Link to={`/shifts/${shift.fields.uuid}`}>
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