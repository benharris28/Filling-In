import React from 'react';
import ApiContext from '../ApiContext'
import { withRouter } from '../withRouter'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ApplyModal from '../Components/ApplyModal'
import Badge from 'react-bootstrap/Badge';




class ShiftDetailsPage extends React.Component {
  static contextType = ApiContext;
  
  state = {
    shift_id: this.props.router.params.id,
    shift: {},
    clinic: {},
    skills: [],
    showApplyModal: false,
    
  }

  componentDidMount() {
    this.findShift(this.state.shift_id)
    
  }

  //Match shift ID to clinic to pull in correct details

  findShift = (id) => {
    const shifts = this.context.shifts

    const currentShift = shifts.filter(shift => shift.id == id)
    console.log(currentShift)
    console.log(currentShift[0])

    this.setState({
      shift: currentShift[0],
      skills: currentShift[0].skills_required
    }, this.findClinic(currentShift[0].clinic_id))
    
  }

  findClinic = (clinic_id) => {
    const clinics = this.context.clinics

    const currentClinic = clinics.filter(clinic => clinic.id == clinic_id)

    this.setState({
      clinic: currentClinic[0]
    })
  }

    setApplyModal = (status) => {
    this.setState({
      showApplyModal: status
    })
  }
  
  render() {

   console.log(this.props)
    console.log(this.state)
   
    const { clinic, shift } = this.state

    const skillList = this.state.skills.map(s => <Col xs={4} md={2} lg={1}><Badge bg="info">{s}</Badge></Col>)
    console.log(skillList)
   
    

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
                onClick={() => this.setApplyModal(true)}>
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
       

        {this.state.showApplyModal &&
            <ApplyModal
              show={this.state.showApplyModal}
              shift={this.state.shift}
              onHide={() => this.setApplyModal(false)}
              
            />
        }

      </div>
    )
  }
}

export default withRouter(ShiftDetailsPage);