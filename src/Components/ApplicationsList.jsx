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

class ApplicationsList extends React.Component {
  static contextType = ApiContext;
  
  render() {
    const { applications } = this.props;
    
    return (
      <>
      {applications.length <1 && 
        <div>
           <h4>Applications For Review</h4>
          <div>No applications to review</div>
         </div>
        
      }

      
        {applications.length >= 1 &&
       <div>

         <div>
           <h4>Applications For Review</h4>
         </div>
          <div>
            {applications.map(application =>

              <Card className="mb-2" key={application.id}>
                <Card.Header>Applications</Card.Header>
                <Card.Body>
                  <Card.Title>Status: {application.fields.status}</Card.Title>
                  <Card.Text>
                 
                  </Card.Text>
                  <Link to={`/shifts/${application.id}`}>
                    <Button variant="primary">More Details</Button>
                  </Link>
                  
                </Card.Body>
              </Card>
            )}
          </div>
      

      </div>
        }
      </>
    )
  }
}

export default ApplicationsList;