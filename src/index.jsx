import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';


const onRedirectCallback1 = appState => {
    // Handle redirect for first URI
  };

  const onRedirectCallback2 = appState => {
    // Handle redirect for second URI
  };

ReactDOM.createRoot(document.getElementById('root')).render(
  

 <Auth0Provider
      domain="dev-xohcoo5z64jbrnhh.us.auth0.com"
      clientId="0m3jMr4BoW8sYRDlceaEERV2PkisB55t"
      providerConfig={{
        redirectUri: ['https://filling-in.benharris28.repl.co/clinics',  'https://filling-in.benharris28.repl.co/practitioners']
        
      }}
   onRedirectCallback={[
        onRedirectCallback1,
        onRedirectCallback2,
      ]}
    >
	<BrowserRouter>
    <App />
  </BrowserRouter>
  </Auth0Provider>
 
)