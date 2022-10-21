import React from 'react'
import ShiftListing from './Routes/ShiftListing'
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
          </Routes>
        </div>
      </ApiContext.Provider>
    )
  }
}

export default App;
