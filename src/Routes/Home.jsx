import React from 'react';
import ApiContext from '../ApiContext'
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export default function Home() {
  const { user } = useAuth0();

  console.log(user)
  
  return (
    <div>
      This is the homepage! Nice, isn't it?
    </div>
  )
}
