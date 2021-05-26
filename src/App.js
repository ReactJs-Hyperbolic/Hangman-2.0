import './App.css';
import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      console.log(event);
      if (playable.keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            // showNotification();
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          } else {
            // showNotification();
          }
        }
      }
    };

    // Event listener
    window.addEventListener('keydown', handleKeydown);

    // Clean-up event listeners which are rendered each time
    return () => {
      console.log('CLEANED');
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [correctLetters, wrongLetters, playable]);

  return (
    <>
      <Header />
      <div className='game-container'>
        <Figure />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
    </>
  );
}

export default App;
