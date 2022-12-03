import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.createRoot(document.getElementById('root')).render(
  
 <Auth0Provider
      domain="dev-xohcoo5z64jbrnhh.us.auth0.com"
      clientId="0m3jMr4BoW8sYRDlceaEERV2PkisB55t"
      providerConfig={{
        redirectUri: ['https://filling-in.benharris28.repl.co/clinics',  'https://filling-in.benharris28.repl.co/practitioners']
        
      }}
    >
	<BrowserRouter>
    <App />
  </BrowserRouter>
  </Auth0Provider>
 
)