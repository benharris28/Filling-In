import React, { useState, useContext, useEffect } from 'react'
import ShiftListing from './Routes/ShiftListing'
import PostShift from './Routes/PostShift'
import ShiftDetailsPage from './Routes/ShiftDetailsPage'
import Home from './Routes/Home'
import ClinicsDashboard2 from './Routes/ClinicsDashboard2'
import NavBar from './Components/Navbar'
import allShifts from './Shifts'
import allClinics from './Clinics'
import users from './Users'
import TestShiftList from './Components/TestShiftList'
import './App.css'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import ApiContext from './ApiContext';
import { useAuth0 } from '@auth0/auth0-react';
import Airtable from 'airtable';

function App() {
  const [shifts, setShifts] = useState(allShifts);
  const [clinics, setClinics] = useState(allClinics);
  const [clinic_record_id, setClinicRecordId] = useState('recs5CqOvbIoy4b9q');
  const { isAuthenticated, user } = useAuth0();
  const [userRecord, setUserRecord] = useState(null);

    useEffect(() => {
    if (isAuthenticated) {
      // Set up Airtable client
      const airtable = new Airtable({ apiKey: 'keyP9Ri1WHoSEV5W1' }).base('appHZw8p3zb6QrFz3');

      // Get user's record from Airtable
      airtable('Users')
        .select({
          filterByFormula: `{user_id} = "${user.sub}"`
        })
        .firstPage((err, records) => {
          if (err) {
            console.error(err);
            return;
          }

          setUserRecord(records[0]);
        });
    }
  }, [isAuthenticated, user]);
  
  const value={
    shifts,
    clinics,
    userRecord,
    clinic: clinics[0],
    clinic_record_id
  }

  console.log(value)
  
  return (
    <div className="App">
      <ApiContext.Provider value={value}>
        <NavBar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shifts" element={<ShiftListing />} />
            <Route path="/post-shift" element={<PostShift />} />
             <Route
           
              path='/shifts/:id'
               action={({ params }) => {}}
              element={<ShiftDetailsPage />}
               loader={({ params }) => {
              console.log(params.id); // "hotspur"
                  
              }}
            />
             <Route
           
              path='/clinics'
               action={({ params }) => {}}
              element={<ClinicsDashboard2 />}
               loader={({ params }) => {
              console.log(params.id); // "hotspur"
                  
              }}
            />
             <Route
           
              path='/testshifts'
               action={({ params }) => {}}
              element={<TestShiftList />}
               loader={({ params }) => {
              console.log(params.id); // "hotspur"
                  
              }}
            />
            <Route
           
              path='/signup'
               action={({ params }) => {}}
              element={<Home />}
               loader={({ params }) => {
              console.log(params.id); // "hotspur"
                  
              }}
            />
          </Routes>
        </div>
      
      </ApiContext.Provider>
    </div>  
  )
}



export default App;
