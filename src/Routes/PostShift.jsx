import React, { useState } from 'react';
import ShiftPostForm from '../Components/ShiftPostForm'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ApiContext from '../ApiContext'

function PostShift() {
  const [skillState, setSkillState] = useState({
    
  })
  const checklistOptions = ['Laughing Gas', 'Cleaning']
  
  return (
    <div>
      <Container>
      <Form>
        <Form.Group>
          <Form.Label>Shift Title</Form.Label>
          <Form.Control type="text" placeholder="Eg. General Hygenist Shift..." />
        <Form.Text className="text-muted">
          Please keep the title to one line
        </Form.Text>
        </Form.Group>
        <Form.Group>
          {checklistOptions.map((option, index) => (
            <Form.Check
            
            type="checkbox"
            label={option}
            id={option}
            onChange={(e) => handleCheckboxChange(id)}
          />
          ))}
          
        </Form.Group>
      </Form>
        </Container>
      
    </div>
  )
}

export default PostShift;