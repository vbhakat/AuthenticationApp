import React from 'react';
import GoogleAuth from './GoogleLogin';
import MicrosoftAuth from './MicrosoftLogin';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Authentication Demo</h1>
        <GoogleAuth />
        <MicrosoftAuth />
      </header>
    </div>
  );
};

export default App;
