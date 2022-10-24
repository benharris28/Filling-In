import React from 'react';
import ApiContext from '../ApiContext'
import Form from 'react-bootstrap/Form';

class ShiftPostForm extends React.Component {

  handleData = () => {
   
    const newShift = {
     
   }
    
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
        </Form>
      </div>
    )
  }
}

export default ShiftPostForm;