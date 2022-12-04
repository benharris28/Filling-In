import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from 'react-router-dom';
import Airtable from 'airtable';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  onRedirectCallback1,
  onRedirectCallback2,
  onRedirectCallback3,
} from './Auth0Calcs';

const airtable = new Airtable({ apiKey: 'keyP9Ri1WHoSEV5W1' }).base('appHZw8p3zb6QrFz3');



ReactDOM.createRoot(document.getElementById('root')).render(
  

 <Auth0Provider
      domain="dev-xohcoo5z64jbrnhh.us.auth0.com"
      clientId="0m3jMr4BoW8sYRDlceaEERV2PkisB55t"
      redirectUri={['https://filling-in.benharris28.repl.co/signup',  'https://filling-in.benharris28.repl.co/practitioners', 'https://filling-in.benharris28.repl.co/clinics']}
        
      
  
    >
	<BrowserRouter>
    <App />
  </BrowserRouter>
  </Auth0Provider>
 
)