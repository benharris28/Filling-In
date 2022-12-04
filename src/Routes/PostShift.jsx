import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react';
import Airtable from 'airtable';

const PostShift = () => {
  const [skillState, setSkillState] = useState({});
  const checklistOptions = ['Laughing Gas', 'Cleaning'];
  const { isAuthenticated, user } = useAuth0();
  const [userRecord, setUserRecord] = useState(null);

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

  const handleCheckboxChange = (id) => {
    const newState = { ...skillState };
    newState[id] = !newState[id];
    setSkillState(newState);
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
  );
};

export default PostShift;