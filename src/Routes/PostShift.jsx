import React, { useState, useEffect, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react';
import Airtable from 'airtable';
import { Modal } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import dayjs from 'dayjs';
import ApiContext from '../ApiContext';
import { v4 } from 'uuid';

const PostShift = () => {
  const [shiftTitle, setShiftTitle] = useState('');
  const [shiftOverview, setShiftOverview] = useState('');
  const [date, setDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [position, setPosition] = useState('');
  const [skillState, setSkillState] = useState([]);
  const checklistOptions = ['Laughing Gas', 'Cleaning'];
  const { isAuthenticated, user } = useAuth0();
  const { userRecord } = useContext(ApiContext);

  console.log(skillState)

  

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

    const formattedDate = dayjs(date).format('YYYY-MM-DDTHH:mm:ssZ');
    const formattedEndDate = dayjs(endDate).format('YYYY-MM-DDTHH:mm:ssZ');

    // Connect to Airtable
    const airtable = new Airtable({ apiKey: 'keyP9Ri1WHoSEV5W1' }).base(
      'appHZw8p3zb6QrFz3'
    );

      // Generate a UUID for the new shift
    const shiftUUID = v4();



    // Create new shift record
    airtable('Shifts')
      .create(
        {
          uuid: shiftUUID,
          shift_title: shiftTitle,
          shift_overview: shiftOverview,
          position: position,
          skills_required: skillState,
          user_id: [userRecord.id],
          start_date: formattedDate,
          end_date: formattedEndDate,
          status: 'Open',
          active: 'False'
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
            <Form.Label>Shift Overview</Form.Label>
            <Form.Control
              type="text"
              placeholder="Eg. What is expected..."
              value={shiftOverview}
              onChange={(e) => setShiftOverview(e.target.value)}
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
          
          <Form.Group className="mb-3">
            <Form.Label>Set a start date</Form.Label>
            <Form.Control
              type="datetime-local"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Set an end date</Form.Label>
            <Form.Control
              type="datetime-local"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
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