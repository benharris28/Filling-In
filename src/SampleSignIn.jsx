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
