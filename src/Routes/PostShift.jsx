import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react';
import Airtable from 'airtable';
import { Form, Modal, DateTimeInput } from 'react-bootstrap'

const PostShift = () => {
  const [shiftTitle, setShiftTitle] = useState('');
  const [date, setDate] = useState(null);
  const [position, setPosition] = useState('');
  const [skillState, setSkillState] = useState([]);
  const checklistOptions = ['Laughing Gas', 'Cleaning'];
  const { isAuthenticated, user } = useAuth0();
  const [userRecord, setUserRecord] = useState(null);

  console.log(skillState)

  useEffect(() => {
    if (isAuthenticated && user) {
      // Connect to Airtable
      const airtable = new Airtable({ apiKey: 'keyP9Ri1WHoSEV5W1' }).base(
        'appHZw8p3zb6QrFz3'
      );

      // Find user record in Airtable
      airtable('Users')
        .select({
          filterByFormula: `{user_id} = "${user.sub}"`,
        })
        .firstPage((error, records) => {
          if (error) {
            console.error(error);
            return;
          }
          if (records.length > 0) {
            setUserRecord(records[0]);
          }
        });
    }
  }, [isAuthenticated, user]);

  const handleCheckboxChange = (option) => {
    const newState = [...skillState];
    if (!newState.includes(option)) {
      newState.push(option);
    } else {
      newState.splice(newState.indexOf(option), 1);
    }
    setSkillState(newState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Connect to Airtable
    const airtable = new Airtable({ apiKey: 'keyP9Ri1WHoSEV5W1' }).base(
      'appHZw8p3zb6QrFz3'
    );



    // Create new shift record
    airtable('Shifts')
      .create(
        {
          shift_title: shiftTitle,
          position: position,
          skills_required: skillState,
          user_id: user.sub,
        },
        (error) => {
          if (error) {
            console.error(error);
          }
        }
      );
  };

  if (!isAuthenticated) {
    return <div>Please login to view this page</div>;
  }

  if (!userRecord) {
    return <div>Loading...</div>;
  }

  if (userRecord.fields.status !== 'Approved' || userRecord.fields.user_type !== 'Clinic') {
    return <div>You must complete your profile before posting a shift</div>;
  }

  return (
    <div>
      <Container>
        <div className="mt-4">
          <h1>Post a New Shift</h1>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Shift Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Eg. General Hygenist Shift..."
              value={shiftTitle}
              onChange={(e) => setShiftTitle(e.target.value)}
            />
            <Form.Text className="text-muted">
              Please keep the title to one line
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Position</Form.Label>
            <Form.Control
              as="select"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            >
              <option value="">-- Select a position --</option>
              <option value="Hygienist">Hygienist</option>
              <option value="Dentist">Dentist</option>
              <option value="Assistant">Assistant</option>
              <option value="Receptionist">Receptionist</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            {checklistOptions.map((option, index) => (
              <Form.Check
                key={index}
                type="checkbox"
                label={option}
                id={option}  
                onChange={(e) => handleCheckboxChange(option)}
              />
            ))}
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default PostShift;