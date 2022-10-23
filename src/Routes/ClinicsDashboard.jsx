import React from 'react';
import ApiContext from '../ApiContext'
import { withRouter } from '../withRouter'
import ShiftList from '../Components/ShiftList'
import ApplicationsList from '../Components/ApplicationsList'
import Container from 'react-bootstrap/Container';
import ApplicationsApiService from '../Services/application-api-service';


class ClinicsDashboard extends React.Component {
  static contextType = ApiContext;

  state = {
    clinic_id: this.props.router.params.id,
    shifts: [],
    applications: []
  }

  componentDidMount() {
    
    this.findClinicShifts()
    ApplicationsApiService.getApplicationsByClinic(this.state.clinic_id)
    .then(res => {
      this.setState({
        applications: res.records
      })
    })
  }
  
  //On this page:
  //An editable form for clinic details (hook up to memberstack)
  //A list of all posts (and link to editable post page)
  //A list of all applications that have come in (and link to application page)
  //A sidebar to select your view (build later after functionality built)
  findClinicShifts = () => {
    // find all shifts that correspond to the clinic id
    const shifts = this.context.shifts
    const clinicID = this.state.clinic_id

    const clinicShifts = shifts.filter(shift => shift.clinic_id == clinicID)

    this.setState({
      shifts: clinicShifts
    })
  }
  
  render() {
    console.log(this.state)
    
    return (
      <div className="mt-3">
        <Container>
        <h1>Clinic Dashboard</h1>
        <div className="mb-3">
          This is the Clinic details section (to be built out)
        </div>
        <div className="mb-3">
          <ShiftList 
            shifts={this.state.shifts}
            />
         
        </div>
        <div>
      
          <ApplicationsList 
            applications={this.state.applications}
            />
            
        </div>
          </Container>
      </div>
    )
  }
}

export default withRouter(ClinicsDashboard);
