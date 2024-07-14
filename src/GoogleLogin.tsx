import React from 'react';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';

const GoogleLogin: React.FC = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: () => console.log('Login Failed'),
  });

  return (
    <button onClick={() => login()}>
      Sign in with Google
    </button>
  );
};

const GoogleAuth: React.FC = () => (
  <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
    <GoogleLogin />
  </GoogleOAuthProvider>
);

export default GoogleAuth;
