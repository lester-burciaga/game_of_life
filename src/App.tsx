
import React from 'react';
import './App.css';
import Board from './components/organisms/Board';

function App() {
  return (
    <div className="App text-center">
       <h1 className='title mt-4'>&#128126; Game of Life &#128126;</h1>
       <Board />
    </div>
  );
}

export default App;
