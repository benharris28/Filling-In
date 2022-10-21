import React from 'react'
import ShiftListing from './Routes/ShiftListing'
import ShiftDetailsPage from './Routes/ShiftDetailsPage'
import Home from './Routes/Home'
import './App.css'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import ApiContext from './ApiContext';

class App extends React.Component {
  render() {

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
