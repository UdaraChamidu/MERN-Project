import { useNavigate } from 'react-router-dom';   /* to navigate to other pages */
import React from 'react';
import './App.css';

function App() {

  const navigate = useNavigate();   /* to navigate to other pages, a function created using useNavigate hook */
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My First React app.</h1>
        <p> I'm Udara Chamidu</p>
        <button className='users-button' onClick={() => navigate("/users")}>Users</button>      {/* this take us to /users */}
      </header>
    </div>
  );
}

export default App;
