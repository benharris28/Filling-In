import React, { useState, useEffect } from 'react';
import ApiContext from '../ApiContext';
import { useAuth0 } from '@auth0/auth0-react';
import { useParams, Link } from 'react-router-dom';
import ShiftList from '../Components/ShiftList';
import ApplicationsList from '../Components/ApplicationsList';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Airtable from 'airtable';
import ApplicationsApiService from '../Services/application-api-service';
import ShiftApiService from '../Services/shift-api-service';

const ClinicsDashboard2 = () => {
  const { isAuthenticated, user } = useAuth0();
  const [userStatus, setUserStatus] = useState(null);
  const [shifts, setShifts] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      // Set up Airtable client
      const airtable = new Airtable({ apiKey: 'keyP9Ri1WHoSEV5W1' }).base('appHZw8p3zb6QrFz3');

      // Get user's status from Airtable
      airtable('Users')
        .select({
          filterByFormula: `{user_id} = "${user.sub}"`
        })
        .firstPage((err, records) => {
          if (err) {
            console.error(err);
            return;
          }

          const record = records[0];
          setUserStatus(record.get('status'));
        });

      // Load shifts and applications data
      ShiftApiService.getShiftsByClinic(user.sub)
        .then(res => {
          setShifts(res.records);
        });

      ApplicationsApiService.getApplicationsByClinic(user.sub)
        .then(res => {
          setApplications(res.records);
        });
    }
  }, [isAuthenticated, user]);

  if (!isAuthenticated) {
    return <h1>Please login to view this page</h1>;
  }

  console.log(user)
  console.log(userStatus)

  return (
    <div className="mt-3">
      <Container>
        <h1>Clinic Dashboard</h1>
        <div className="mb-3">
          This is the Clinic details section (to be built out)
        </div>
        <div className="mb-3">
          <div className="mb-3">
            {userStatus === 'Approved' && (
              <Link to={`/post-shift`}>
                <Button variant="primary">Post a shift</Button>
              </Link>
            )}

            {userStatus !== 'Approved' && (
              <Link to={`/complete-profile`}>
                <Button variant="primary">Complete your profile</Button>
              </Link>
            )}
          </div>
          <ShiftList shifts={shifts} />
        </div>
        <div>
          <ApplicationsList applications={applications} />
        </div>
      </Container>
    </div>
  );
};

export default ClinicsDashboard2;