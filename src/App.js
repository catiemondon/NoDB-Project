import React from 'react';
import AddWeight from './Components/Weights/AddWeight'
import AddCardio from './Components/Cardio/AddCardio'
import './Reset.css'
import './App.css';


function App() {
  return (
    <div className="App">
    <header>
      <h3>Welcome</h3>
      <h3>Swole Patrol</h3>

    </header>
    
    <div className="List-container">
    
    <div>
    <AddWeight />
    </div>
    <div className="Cardio">
    <AddCardio />
    </div>
    </div>
    </div>
  );
}

export default App;
