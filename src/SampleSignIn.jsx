import React from 'react';
import { useAuth0 } from 'auth0-react';

const Signup = ({ signupRoute }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() =>
        loginWithRedirect({
          appState: { targetUrl: signupRoute }
        })
      }
    >
      Sign up
    </button>
  );
};

export default Signup;

<Signup signupRoute="/dashboard" />

import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignupButton = () => {
  const { loginWithRedirect, user } = useAuth0();

  useEffect(() => {
    if (user) {
      // post user data to Airtable
      fetch('https://api.airtable.com/v0/YOUR_BASE_ID/YOUR_TABLE_NAME', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fields: {
            name: user.name,
            email: user.email,
            auth0_id: user.sub
          }
        })
      });
    }
  }, [user]);

  return (
    <button onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>
      Sign up with Auth0
    </button>
  );
};

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>
      Sign up with Auth0
    </button>
  );
};


import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Redirect } from 'react-router-dom';

const SignupButton = () => {
  const { loginWithRedirect, user } = useAuth0();

  useEffect(() => {
    if (user) {
      // post user data to Airtable
      fetch('https://api.airtable.com/v0/YOUR_BASE_ID/YOUR_TABLE_NAME', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fields: {
            name: user.name,
            email: user.email,
            auth0_id: user.sub
          }
        })
      });
    }
  }, [user]);

  if (user) {
    return <Redirect to="/clinics" />;
  }

  return (
    <button onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>
      Sign up with Auth0
    </button>
  );
};