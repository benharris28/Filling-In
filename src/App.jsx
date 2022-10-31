import React, { useState, useContext } from 'react'
import ShiftListing from './Routes/ShiftListing'
import PostShift from './Routes/PostShift'
import ShiftDetailsPage from './Routes/ShiftDetailsPage'
import Home from './Routes/Home'
import ClinicsDashboard from './Routes/ClinicsDashboard'
import NavBar from './Components/Navbar'
import allShifts from './Shifts'
import allClinics from './Clinics'
import users from './Users'
import './App.css'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import ApiContext from './ApiContext';

function App() {
  const [shifts, setShifts] = useState(allShifts);
  const [clinics, setClinics] = useState(allClinics);
  const [user, setUser] = useState(users.users);
  const [clinic_record_id, setClinicRecordId] = useState('recs5CqOvbIoy4b9q');
  
  const value={
    shifts,
    clinics,
    user,
    clinic: clinics[0],
    clinic_record_id
  }

  console.log(shifts)
  
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
           
              path='/clinics/:id'
               action={({ params }) => {}}
              element={<ClinicsDashboard />}
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
