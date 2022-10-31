import React from 'react';
import ApiContext from '../ApiContext'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ShiftApiService from '../Services/shift-api-service';


class ShiftPostForm extends React.Component {
static contextType = ApiContext;
  
  handleSubmit = () => {

    const clinicRecord = this.context.clinic_record_id

    const newShift = {
      
      "records": [
        {
          "fields": {
            "id": "6",
            "clinic_id": [`${clinicRecord}`],
            "skills_required": ["Laughing Gas", "Cleaning"],
            "position": "hygenist"

          }
        }

      ]

    }

  ShiftApiService.createShift(newShift)
  .then(res => {
           console.log(res)
          
    })
  }
  
  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button
            onClick={() => this.handleSubmit()}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default ShiftPostForm;