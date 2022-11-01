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

function ShiftList(props) {
  const { shifts } = props;
  const context = useContext(ApiContext);

  return (
    <>
          <div>
           <h4>Your Shift Postings</h4>
         </div>
          <div>
            {shifts.map(shift =>

              <Card className="mb-2" key={shift.id}>
                <Card.Header>Shift</Card.Header>
                <Card.Body>
                  <Card.Title>{shift.title}</Card.Title>
                  <Card.Text>
                    {shift.fields.shift_title}
                  </Card.Text>
                  <Link to={`/shifts/${shift.fields.id}`}>
                    <Button variant="primary">More Details</Button>
                  </Link>
                  
                </Card.Body>
              </Card>
            )}
          </div>
      

      
    </>
  
)
   
}

export default ShiftList;
