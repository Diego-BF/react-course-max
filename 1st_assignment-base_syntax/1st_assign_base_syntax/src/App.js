import React from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

function App() {
  return (
    <div className="App">
      <UserInput />
      <UserOutput />
    </div>
  );
}

export default App;
