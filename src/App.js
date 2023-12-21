import React from 'react';
import TextBox from './textbox';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>What's in your heart?</h1>
      <div className='heart'>
        <TextBox />
        <h2>Type in 12 important things{'\n'}in your heart</h2> 
      </div>   
    </div>
  );
}

export default App;
