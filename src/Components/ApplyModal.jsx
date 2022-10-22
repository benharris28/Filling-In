import React from 'react';
import ApiContext from '../ApiContext'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image'
import ApplicationsApiService from '../Services/application-api-service';




class ApplyModal extends React.Component {
  static contextType = ApiContext;

  handleSubmit = () => {
    //Prepare data to be sent to airtable
    //Create new record in applications table

    const user = this.context.user.id
    const { shift } = this.props
    
    
    const application =
    {
      "records": [
        {
          "fields": {
            "shift_id": `${shift.id}`,
            "user_id": `${user}`,
            "application_date": "2022-10-21",
            "status": "Pending",
            "note": "Hi I would really like this shift thanks so much!"
          }
        }

      ]
    }


    ApplicationsApiService.createApplication(application)
     .then(res => {
           console.log(res)
    })

  }


  render() {
    const { show, onHide, shift } = this.props;




    return (
      <Modal
        {...this.props}
        dialogClassName="info-modal"
        contentClassName="info-modal-content"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Apply for this Shift</h4>
          <div>
            <ul>
              <li>Details 1</li>
              <li>Details 2</li>
              <li>Details 3</li>
            </ul>
          </div>
          <div>
            <Button
              onClick={() => this.handleSubmit()}>
              Apply Now
            </Button>
          </div>






          <hr />
          <p>A new listing will be available each day</p>
        </Modal.Body>
      </Modal>





    )
  }

}

export default ApplyModal;