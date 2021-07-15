import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import SearchBar from './components/SearchBar';
import Poeple from './views/Poeple';
import Planet from './views/Planet';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Router>
        <Poeple path="/people/:id" />
        <Planet path="/planet/:id" />
      </Router>
    </div>
  );
}

export default App;
