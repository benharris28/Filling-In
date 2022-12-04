import Airtable from 'airtable';
import { useAuth0 } from '@auth0/auth0-react';

const airtable = new Airtable({ apiKey: 'bearer keyP9Ri1WHoSEV5W1' }).base('appHZw8p3zb6QrFz3');

export function onRedirectCallback1(appState) {
 
    const { loginWithRedirect } = useAuth0();

    loginWithRedirect({ appState });
          console.log('this ran');
       
    
  
}

export function onRedirectCallback2(appState) {
  // Handle redirect for second URI
}

export function onRedirectCallback3(appState) {
  // Handle redirect for third URI
}