import React, { useContext } from 'react';
import ApiContext from '../ApiContext'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import ShiftApiService from '../Services/shift-api-service';
import Airtable from 'airtable';



class ShiftListing extends React.Component {
  state = {
    shifts: [],
    selectedPosition: 'All',
    selectedCity: 'All'
  }

   handleChange(event) {
    this.setState({selectedPosition: event.target.value});
  }

  handleChangeCity(event) {
    this.setState({selectedCity: event.target.value});
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
      );
  }






  render() {

    const shifts = this.state.shifts
    const filteredShifts = this.state.selectedPosition === 'All' ? this.state.shifts : this.state.shifts.filter(shift => shift.fields.position === this.state.selectedPosition);
    const filteredCity = this.state.selectedCity === 'All'? filteredShifts : filteredShifts.filter(shift => shift.fields.city === this.state.selectedCity);
    
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
                <Form>
                  <Form.Group className="mt-3 mb-3">
                  <Form.Label>Position</Form.Label>
                  <Form.Select aria-label="Default select example"
                    onChange={(event) => this.handleChange(event)}
                    >
                    
                    <option value="All">All</option>
                    <option value="Dentist">Dentist</option>
                    <option value="Hygenist">Hygenist</option>
                    <option value="Dental Assistant">Dental Assistant</option>
                  </Form.Select>
                  </Form.Group>

                  <Form.Group className="mt-3 mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Select aria-label="Default select example"
                    onChange={(event) => this.handleChangeCity(event)}
                    >
                    
                    <option value="All">All</option>
                    <option value="Toronto">Toronto</option>
                    <option value="Mississauga">Mississauga</option>
                    <option value="Ajax">Ajax</option>
                  </Form.Select>
                  </Form.Group>
                  
                </Form>
              </div>

            </Col>
            <Col xs={12} md={9}>
              <div>
                {filteredCity.map(shift =>

                  <Card className="mb-2" key={shift.id}>
                    <Card.Header>Shift</Card.Header>
                    <Card.Body>
                      <Card.Title>{shift.fields.shift_title}</Card.Title>
                      <Card.Text>
                        {shift.fields.clinic_name}
                        <div>City: {shift.fields.city}</div>
                        <div>Position: {shift.fields.position}</div>
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