import React from 'react';
import ApiContext from '../ApiContext'
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export default function Login() {
  const { user } = useAuth0();

  console.log(user)
  
  return (
    <div>
      <div>
        Sign Up as a Clinic
      </div>
      <div>
        Sign Up as a Practitioner
      </div>
    </div>
  )
}
