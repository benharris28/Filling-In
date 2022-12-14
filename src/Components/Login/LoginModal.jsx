import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";

const ModalExample = (props) => {
  const {
    loginWithRedirect,
  } = useAuth0();
  
  return (
    <Modal show={props.show} onHide={props.handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>How would you like to Login?</p>
        <a href="#" onClick={() => loginWithRedirect({ redirectUri: 'https://filling-in.benharris28.repl.co/clinics', signup: true })}>Login as Clinic</a>
        <br />
        <a href="#" onClick={() => loginWithRedirect({ redirectUri: 'https://filling-in.benharris28.repl.co/clinics' })}>Login as Practitioner</a>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      
      </Modal.Footer>
    </Modal>
  );
}

export default ModalExample;
