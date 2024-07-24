import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Simple React App</h1>
        <HelloWorld />
        <p>
          This is a simple React app without Node.js, API, or database.
        </p>
      </header>
    </div>
  );
}

export default App;
