import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";



function NavBar() {
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  const url = '/clinics'
  
    return (
      <div>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to={`/`}>
          <Navbar.Brand href="#home">Filling In</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to={`/shifts`}>
            <Nav.Link href="#features">Shifts</Nav.Link>
            </Link>
            <Nav.Link href="#pricing">How it works</Nav.Link>
           
          </Nav>
          <Nav>
            <Link to={`/clinics`}>
            <Nav.Link href="#deets">My Clinic</Nav.Link>
              </Link>
            {!isAuthenticated &&
            <Button
              onClick={() => loginWithRedirect({ target: url})}>
              Login
            </Button>
            }
            {isAuthenticated &&
            <Button
              onClick={() => logoutWithRedirect()}>
              Logout
            </Button>
            }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
       
      </div>
    )
}

export default NavBar;
