import React, { useState, useEffect } from 'react';
import './AnimatedText.css';

const AnimatedText = ({ text, delay = 300 }) => {
  const [visibleWords, setVisibleWords] = useState([]);
  const words = text.split(' ');

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleWords((prevVisibleWords) => {
        if (prevVisibleWords.length < words.length) {
          return [...prevVisibleWords, words[prevVisibleWords.length]];
        }
        return prevVisibleWords;
      });
    }, delay);

    return () => clearInterval(interval);
  }, [delay, words]);

  return (
    <div className="animated-text">
      {visibleWords.map((word, index) => (
        <span key={index} className="animated-word" style={{ animationDelay: `${index * delay}ms` }}>
          {word}&nbsp;
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
