import React, { useState, useContext, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import ApiContext from '../ApiContext'
import { withRouter } from '../withRouter'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ApplyModal from '../Components/ApplyModal'
import Badge from 'react-bootstrap/Badge';

function ShiftDetailsPage() {
  let { id } = useParams();
  const value = useContext(ApiContext);
  const shifts = value.shifts.allShifts
  const clinics = value.clinics.allClinics

  const [shift, setShift] = useState({});
  const [clinic, setClinic] = useState({});
  const [skills, setSkills] = useState([]);
  const [applyModal, setApplyModal] = useState(false);

  console.log(id)
  console.log(shift)
  console.log(clinics)


   

  
  
  
  useEffect(() => {
    
    
    findShift(id)
   
}, []);

  useEffect(() => {
    console.log(shift.clinic_id)
    findClinic(clinics, shift.clinic_id)
  }, [shift])

  

  const findShift = (id) => {
    return new Promise((resolve, reject) => {
    
    const currentShift = shifts.filter(shift => shift.id == id)
    console.log(currentShift)
    console.log(currentShift[0])

    setShift(currentShift[0])
    setSkills(currentShift[0].skills_required)

      const error = false;
      
    if(!error) {
      resolve();
    } else {
      reject('Error')
    }
    })

    

    
    
  }

 

 

  const findClinic = (clinics, clinic_id) => {
   
    console.log(clinic_id)
    const currentClinic = clinics.filter(clinic => clinic.id == clinic_id)
    console.log(currentClinic[0])
    setClinic(currentClinic[0])
    
  }

   

  const skillList = skills.map(s => <Col xs={4} md={2} lg={1}><Badge bg="info">{s}</Badge></Col>)
  
  return (
    <div className="mt-3">
        <Container>
          <Row className="mb-3">
            <div>
               <Button>
              Back
            </Button>
            </div>
           
          </Row>
          <Row>
            <h2>{shift.title}</h2>
          </Row>
          <Row className="mb-1">
            <Col xs={6} md={2} lg={2}>
              Start Date: {shift.start_date}
            </Col>
            <Col xs={6} md={2}>
              Time: {shift.start_time}
            </Col>
          </Row>
          <Row className="mb-1">
            <Col xs={6} md={2} lg={2}>
              Location: {clinic.clinic_city}, {clinic.clinic_province}
            </Col>
            <Col xs={6} md={2}>
              Role: {shift.position}
            </Col>
          </Row>
          <Row>
            {skillList}
          </Row>
          <hr />
          <Row className="mb-3">
            <Col>
              <Button
                onClick={() => setApplyModal(true)}>
                Apply
              </Button>
            </Col>
            
          </Row>
          <Row className="mb-3">
            <h2>Shift Overview</h2>
            <div>{shift.shift_overview}</div>
          </Row>
          <Row className="mb-3">
            <h2>Shift Requirements</h2>
            <div>{shift.requirements}</div>
          </Row>
         
        </Container>
       

      {applyModal &&
            <ApplyModal
              show={showApplyModal}
              shift={shift}
              onHide={() => setApplyModal(false)}
              
            />
        }

      </div> 
    )
}




export default ShiftDetailsPage;