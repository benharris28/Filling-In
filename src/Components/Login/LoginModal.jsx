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
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>How would you like to sign up?</p>
        <a href="#" onClick={() => loginWithRedirect({ redirectUri: 'https://filling-in.benharris28.repl.co/clinics', signup: true })}>Sign up as clinic</a>
        <br />
        <a href="#" onClick={() => loginWithRedirect({ redirectUri: 'https://filling-in.benharris28.repl.co/clinics' })}>Sign up as Practitioner</a>
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
