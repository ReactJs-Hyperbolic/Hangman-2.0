import React from 'react';

// Pass in the selectedWord to determine how many spaces to show
// along with the correctLetters to compare and deduce what to render
const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className='word' id='word'>
      {selectedWord.split('').map((letter, index) => {
        return (
          <span className='letter' key={index}>
            {correctLetters.includes(letter) ? letter : '_'}
          </span>
        );
      })}
    </div>
  );
};

export default Word;
