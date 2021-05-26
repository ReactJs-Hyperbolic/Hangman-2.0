import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header';
import Figure from './Components/Figure';
import WrongLetters from './Components/WrongLetters';
import Word from './Components/Word';

const words = ['application', 'programming', 'interface', 'wizard'];

// Randomly select a word from the words array to use for a round
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  // Create state for our dynamic variables
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  return (
    <>
      <Header />
      <div className='game-container'>
        <Figure />
        <WrongLetters />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
    </>
  );
}

export default App;
