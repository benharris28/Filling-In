import React from 'react'
import ShiftListing from './Routes/ShiftListing'
import PostShift from './Routes/PostShift'
import ShiftDetailsPage from './Routes/ShiftDetailsPage'
import Home from './Routes/Home'
import ClinicsDashboard from './Routes/ClinicsDashboard'
import NavBar from './Components/Navbar'
import shifts from './Shifts'
import clinics from './Clinics'
import users from './Users'
import './App.css'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import ApiContext from './ApiContext';

class App extends React.Component {
  state = {
    shifts: shifts.shifts,
    clinics: clinics.clinics,
    user: users.users[0],
    clinic: clinics.clinics[0]
  }

  findShiftsforLoggedInUser = () => {
    
  }
 
  
  render() {

    console.log(this.state)

    const value = {
      ...this.state

    }

    return (
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
    )
  }
}

export default App;
