import React from 'react';
import TextBox from './textbox';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>What's in your heart?</h1>
      <div className='heart'>
        <TextBox />
        <h2>Write the 12 most important {'\n'} things in your heart?</h2> 
      </div>   
    </div>
  );
}

export default App;
