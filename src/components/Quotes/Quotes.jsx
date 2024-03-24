import React, { useState, useEffect } from "react";
import quotesData from "../../data.json";
import "../Quotes/Quotes.css";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const length = quotes.length;

  useEffect(() => {
    // Fetch quotes from data.json on component mount
    setQuotes(quotesData.quotes);
  }, []);

  const handleNextClick = () => {
    // Move to the next quote if there are more quotes
    if (currentQuoteIndex < length - 1) {
      setCurrentQuoteIndex((currentIndex) => currentIndex + 1);
    }
  };

  function handleBackClick() {
    // Move to the previous quote if not at the first quote
    if (currentQuoteIndex > 0) {
      setCurrentQuoteIndex((currentIndex) => currentIndex - 1);
    }
  }

  return (
    <div className="quote">
      {length > 0 && (
        <div>
          <p>{quotes[currentQuoteIndex]}</p>
          <div className="buttons">
            <button
              className="btn"
              onClick={handleBackClick}
              disabled={currentQuoteIndex === 0}
            >
              Back
            </button>
            <button
              className="btn"
              onClick={handleNextClick}
              disabled={currentQuoteIndex === length - 1}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quotes;
