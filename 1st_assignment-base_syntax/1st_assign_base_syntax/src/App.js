import React, { useState } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

function App() {
  const [username, setUsername] = useState("Anon");

  const changeNameHandler = (event) => {
    setUsername(event.target.value)
  }

  return (
    <div className="App">
      <UserInput changeName={changeNameHandler} name={username} />
      <UserOutput
        name={username}
        greetings={"How are you?"} />
      <UserOutput
        name={username}
        greetings={"Welcome back!"} />
    </div>
  );
}

export default App;
