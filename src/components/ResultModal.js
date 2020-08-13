import React from 'react';
import Question from './Question';

export default function ResultModal({getQuestion, isCorrect,question}) {
  return (
    <div className="result-modal">
      <div className="overlay" />
      <div className="result-modal-content">
        {isCorrect && <h3>
          👊👊👊
          <br />
          YOU WON!
        </h3>
        }
       {!isCorrect &&  <h3>
          😟😢😟
          <br />
          YOU LOST!
        </h3>
       }
        <div className="correct-answer">
          <small>The correct answer was:</small>
          <br />
          <strong>{question.correct_answer}</strong>
        </div>

        <button onClick={getQuestion}>Go to next question 👉</button>
      </div>
    </div>
  );
}
