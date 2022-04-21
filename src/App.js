import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CharacterList from './pages/CharactersList/CharactersList';
import Character from './pages/Character/Character';
import Search from './pages/Search/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route stric exact path='/' element={<CharacterList />} />
        <Route stric exact path='/search' element={<Search />} />
        <Route stric exact path='/:id' element={<Character />} />
      </Routes>

    </div>
  );
}

export default App;
