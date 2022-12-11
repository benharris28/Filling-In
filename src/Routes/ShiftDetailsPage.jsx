import React from 'react';
import ApiContext from '../ApiContext'
import Airtable from 'airtable';
import { withRouter } from '../withRouter'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ApplyModal from '../Components/ApplyModal'
import Badge from 'react-bootstrap/Badge';
import ShiftApiService from '../Services/shift-api-service';




class ShiftDetailsPage extends React.Component {
  static contextType = ApiContext;
  
  state = {
    shift_id: this.props.router.params.id,
    shift: {
      fields: {
        id: '',
        shift_title: '',
        position: '',
        shift_overview: '',
        requirements: '',
        start_date: '',
        start_time: '',
        skills_required: [],
        experience_required: '',
        clinic_name: '',
        city: ''
      }
    },
    clinic: {},
    skills: [],
    showApplyModal: false,
    
  }

  componentDidMount() {
    const { userRecord } = this.context

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

    
    
    
  



    setApplyModal = (status) => {
    this.setState({
      showApplyModal: status
    })
  }

  handleBack = () => {
    this.props.router.navigate('/shifts')
  }
  
  render() {
  console.log(this.state)
   
   const skillList = this.state.shift.fields.skills_required.map(s => <Col xs={4} md={2} lg={1}><Badge bg="info">{s}</Badge></Col>)
    const { clinic, shift } = this.state
  
    
   
    

    return (
      <div className="mt-3">
        <Container>
          <Row className="mb-3">
            <div>
               <Button onClick={this.handleBack}>
              Back
            </Button>
            </div>
           
          </Row>
          <Row>
            <h2>{shift.fields.shift_title}</h2>
          </Row>
          <Row className="mb-1">
            <Col xs={6} md={2} lg={2}>
              Start Date: {shift.fields.start_date}
            </Col>
            <Col xs={6} md={2}>
              Time: {shift.fields.start_time}
            </Col>
          </Row>
          <Row className="mb-1">
            <Col xs={6} md={2} lg={2}>
              Location: {shift.fields.city}
            </Col>
            <Col xs={6} md={2}>
              Role: {shift.fields.position}
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
            <div>{shift.fields.shift_overview}</div>
          </Row>
          <Row className="mb-3">
            <h2>Shift Requirements</h2>
            <div>{shift.fields.requirements}</div>
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