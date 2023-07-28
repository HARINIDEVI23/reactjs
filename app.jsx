import React, { useState } from 'react';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const toggleBackgroundColor = () => {

    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <header className="App-header">
        <button onClick={toggleBackgroundColor}>Toggle Background</button>
      </header>
    </div>
  );
}

export default App;
