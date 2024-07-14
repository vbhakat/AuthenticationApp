import React from 'react';
import { PublicClientApplication, AuthenticationResult } from '@azure/msal-browser';
import { MsalProvider, useMsal, useIsAuthenticated } from '@azure/msal-react';

const msalConfig = {
  auth: {
    clientId: 'YOUR_MICROSOFT_CLIENT_ID',
    authority: 'https://login.microsoftonline.com/YOUR_TENANT_ID',
    redirectUri: 'http://localhost:5000'
  }
};

const msalInstance = new PublicClientApplication(msalConfig);

const MicrosoftLogin: React.FC = () => {
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const handleLogin = () => {
    instance.loginPopup()
      .then((response: AuthenticationResult) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={handleLogin}>
          Sign in with Microsoft
        </button>
      ) : (
        <div>
          <h2>Welcome, {accounts[0]?.name}</h2>
        </div>
      )}
    </div>
  );
};

const MicrosoftAuth: React.FC = () => (
  <MsalProvider instance={msalInstance}>
    <MicrosoftLogin />
  </MsalProvider>
);

export default MicrosoftAuth;
