import React from 'react';
import ShiftPostForm from '../Components/ShiftPostForm'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ApiContext from '../ApiContext'

class PostShift extends React.Component {
  render() {
    return (
      <div className="mt-3">
        <Container>
          <h1>Post a Shift</h1>
          <ShiftPostForm />
        </Container>
      </div>
    )
  }
}

export default PostShift;