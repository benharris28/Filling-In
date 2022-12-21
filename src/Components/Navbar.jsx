import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginModal from "./Login/LoginModal";
import SignupModal from "./Signup/SignupModal";



function NavBar() {
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleCloseSignupModal = () => setShowSignupModal(false);
  const handleShowSignupModal = () => setShowSignupModal(true);

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
    <>

      <Navbar bg="light" expand="lg" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Filling In</Navbar.Brand>
         
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {!isAuthenticated &&
                  <Nav.Link
                    href="#features"
                    onClick={handleShowModal}
                  >Login
                  </Nav.Link>
                }
                {!isAuthenticated &&
                  <Button
                    onClick={handleShowSignupModal}>
                    Sign Up
                  </Button>
                }
                
                <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <LoginModal
        show={showModal}
        handleClose={handleCloseModal}
        handleShow={handleShowModal}
      />
      <SignupModal
        show={showSignupModal}
        handleClose={handleCloseSignupModal}
        handleShow={handleShowSignupModal}
      />
    </>

  )
}

export default NavBar;
