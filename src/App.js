import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Figure from './Components/Figure';
import WrongLetters from './Components/WrongLetters';
import Word from './Components/Word';
import Notification from './Components/Notification';
import Popup from './Components/Popup';

import { showNotification as show } from './helpers/helpers';

const words = ['application', 'programming', 'interface', 'wizard'];

// Randomly select a word from the words array to use for a round
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  // Create state for our dynamic variables
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      console.log(event);
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            // showNotification();
            // Use custom helper function to setShowNotification to true then false
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(wrongLetters => [...wrongLetters, letter]);
          } else {
            // showNotification();
            show(setShowNotification);
          }
        }
      }
    };

    // Event listener
    window.addEventListener('keydown', handleKeydown);

    // Clean-up event listeners which are rendered each time
    return () => {
      console.log('Cleaned event listener');
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [correctLetters, wrongLetters, playable]);

  return (
    <>
      <Header />
      <div className='game-container'>
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
