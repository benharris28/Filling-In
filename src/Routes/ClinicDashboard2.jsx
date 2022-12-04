import React, { useState, useEffect } from 'react';
import ApiContext from '../ApiContext';
import { useAuth0 } from '@auth0/auth0-react';
import { useParams, Link } from 'react-router-dom';
import ShiftList from '../Components/ShiftList';
import ApplicationsList from '../Components/ApplicationsList';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ApplicationsApiService from '../Services/application-api-service';
import ShiftApiService from '../Services/shift-api-service';

const ClinicsDashboard2 = () => {
  const { id } = useParams();
  const { user } = useAuth0();
  const [shifts, setShifts] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    ShiftApiService.getShiftsByClinic(user.clinic_id)
      .then(res => {
        setShifts(res.records);
      });

    ApplicationsApiService.getApplicationsByClinic(user.clinic_id)
      .then(res => {
        setApplications(res.records);
      });
  }, []);

  return (
    <div className="mt-3">
      <Container>
        <h1>Clinic Dashboard</h1>
        <div className="mb-3">
          This is the Clinic details section (to be built out)
        </div>
        <div className="mb-3">
          <div className="mb-3">
            <Link to="/post-shift">
              <Button variant="primary">Post a shift</Button>
            </Link>
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