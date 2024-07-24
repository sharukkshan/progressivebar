import React from 'react';
import './App.css';
import ProgressiveBar from './Components/ProgressiveBar';

function App() {
  return (
    <div className="App">
      <h1 className="heading" style={{ textAlign: 'center' }}>Progress Bar</h1>
      <ProgressiveBar bgcolor="#00C251" height={20} />
    </div>
  );
}

export default App;