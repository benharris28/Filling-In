import React from 'react'
import ShiftListing from './Routes/ShiftListing'
import ShiftDetailsPage from './Routes/ShiftDetailsPage'
import Home from './Routes/Home'
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
    user: users.users[0]
  }

 
  
  render() {

    console.log(this.state)

    const value = {
      ...this.state

    }

    return (
      <ApiContext.Provider value={value}>
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shifts" element={<ShiftListing />} />
             <Route
           
              path='/shifts/:id'
               action={({ params }) => {}}
              element={<ShiftDetailsPage />}
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
