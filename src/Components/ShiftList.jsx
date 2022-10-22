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

class ShiftList extends React.Component {
  static contextType = ApiContext;
  
  render() {
    const { shifts } = this.props;
    
    return (
       <div>
        
          Your Shift Postings
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
      

      </div>
    )
  }
}

export default ShiftList;