import React from 'react';
import ApiContext from '../ApiContext'
import { withRouter } from '../withRouter'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ApplyModal from '../Components/ApplyModal'




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

    const skillList = this.state.skills.map(s => <div>{s}</div>)
    console.log(skillList)
   
    

    return (
      <div>
        <Container>
          <Row>
            <div>
               <Button>
              Back
            </Button>
            </div>
           
          </Row>
          <Row>
            <h4>{shift.title}</h4>
          </Row>
          <Row>
            <Col>
              {clinic.clinic_city}, {clinic.clinic_province}
            </Col>
            <Col>
              {shift.position}
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <Button
                onClick={() => this.setApplyModal(true)}>
                Apply
              </Button>
            </Col>
            
          </Row>
          <Row>
            {skillList}
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