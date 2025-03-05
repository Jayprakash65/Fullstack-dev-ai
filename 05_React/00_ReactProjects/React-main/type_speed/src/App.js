import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const paragraph =
  'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';

const App = () => {
  const maxTimeLimit = 60;

  
  const [remainingTime, setRemainingTime] = useState(maxTimeLimit); 
  const [errorCount, setErrorCount] = useState(0); 
  const [currentCharIndex, setCurrentCharIndex] = useState(0); 
  const [typingStarted, setTypingStarted] = useState(false); 
  const [wordsPerMinute, setWordsPerMinute] = useState(0); 
  const [charactersPerMinute, setCharactersPerMinute] = useState(0); 
  const [characterFeedback, setCharacterFeedback] = useState([]); 

  const inputElementRef = useRef(null);
  
  useEffect(() => {
    inputElementRef.current.focus(); // Automatically focus the input when the page loads
    setCharacterFeedback(Array(paragraph.length).fill('')); // Initialize character status as empty
  }, []);

  // Timer functionality
  useEffect(() => {
    let timer;
    if (typingStarted && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1); // Decrease remaining time by 1 second
      }, 1000);
    }
    if (remainingTime === 0) setTypingStarted(false); // Stop typing when time runs out

    return () => clearInterval(timer); // Clean up timer on component unmount
  }, [typingStarted, remainingTime]);

  // Calculate WPM and CPM whenever currentCharIndex or errorCount changes
  useEffect(() => {
    const correctCharacterCount = currentCharIndex - errorCount; // Number of correctly typed characters
    const elapsedSeconds = maxTimeLimit - remainingTime; // Time that has passed

    if (elapsedSeconds > 0) {
      // Calculate CPM (Characters Per Minute)
      const calculatedCPM = (correctCharacterCount * 60) / elapsedSeconds;
      setCharactersPerMinute(Math.round(calculatedCPM));

      // Calculate WPM (Words Per Minute)
      const calculatedWPM = (correctCharacterCount / 5) * (60 / elapsedSeconds); // 1 word = 5 characters
      setWordsPerMinute(Math.round(calculatedWPM));
    }
  }, [currentCharIndex, errorCount, remainingTime]);

  // Restart the test
  const restartTest = () => {
    setRemainingTime(maxTimeLimit);
    setErrorCount(0);
    setCurrentCharIndex(0);
    setWordsPerMinute(0);
    setCharactersPerMinute(0);
    setTypingStarted(false);
    setCharacterFeedback(Array(paragraph.length).fill(''));
    inputElementRef.current.value = '';
    inputElementRef.current.focus();
  };

  
  const handleTypingInput = (e) => {
    const typedCharacter = e.target.value.slice(-1); // Get the last typed character
    const currentCharacter = paragraph[currentCharIndex];

    // Proceed only if there's time left and we haven't reached the end of the text
    if (currentCharIndex < paragraph.length && remainingTime > 0) {
      if (!typingStarted) setTypingStarted(true); // Start typing if it hasn't started already

      // Check if the typed character is correct or wrong
      if (typedCharacter === currentCharacter) {
        characterFeedback[currentCharIndex] = 'correct'; // Mark as correct
      } else {
        characterFeedback[currentCharIndex] = 'wrong'; // Mark as wrong
        setErrorCount((prevErrorCount) => prevErrorCount + 1); // Increment mistakes
      }

      // Move to the next character
      setCurrentCharIndex((prevIndex) => prevIndex + 1);
      setCharacterFeedback([...characterFeedback]); // Update character feedback
    }
  };

  // Render the app UI
  return (
    <div className="container">
      <h1 className="title">Typing Speed Test</h1>

      {/* Display the paragraph */}
      <div className="test-box">
        <div className="paragraph">
          {paragraph.split('').map((char, index) => (
            <span
              key={index}
              className={`char ${
                index === currentCharIndex ? 'active' : '' 
              } ${characterFeedback[index]}`} // Apply correct/wrong class
            >
              {char}
            </span>
          ))}
        </div>

        {/* Input field */}
        <input
          type="text"
          className="input-field"
          ref={inputElementRef}
          onChange={handleTypingInput} // Handle user typing
        />
      </div>

      {/* Display results */}
      <div className="result">
        <p>Time Left: <strong>{remainingTime}</strong>s</p>
        <p>Mistakes: <strong>{errorCount}</strong></p>
        <p>WPM: <strong>{wordsPerMinute}</strong></p>
        <p>CPM: <strong>{charactersPerMinute}</strong></p>
        <button className="btn" onClick={restartTest}>Restart</button>
      </div>
    </div>
  );
};

export default App;
