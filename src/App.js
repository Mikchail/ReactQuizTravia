import React, {  useState } from "react";
import Question from "./components/Question";
import CategorySelector from "./components/CategorySelector";
import ResultModal from "./components/ResultModal";
import Scoreboard from "./components/Scoreboard";
import "./App.css";
import useTravia from "./components/useTravia";

export default function App() {
  const { category, setCategory, getQuestion, question } = useTravia();
  const [isCorrect, setIsCorrect] = useState(null);

  function answerQuestion(answer) {
    if (answer === question.correct_answer) return setIsCorrect(true);
    setIsCorrect(false);
  }

  function handleChangeQuestion() {
    setCategory(null);
    getQuestion();
  }
  return (
    <div className="app">
      {/* show the result modal ----------------------- */}
      {isCorrect !== null && (
        <ResultModal
          isCorrect={isCorrect}
          question={question}
          getQuestion={handleChangeQuestion}
        />
      )}
      {/* question header ----------------------- */}
      <div className="question-header">
        <CategorySelector category={category} chooseCategory={setCategory} />
        <Scoreboard isCorrect={isCorrect} />
      </div>

      {/* the question itself ----------------------- */}
      <div className="question-main">
        {question && (
          <Question question={question} answerQuestion={answerQuestion} />
        )}
      </div>

      {/* question footer ----------------------- */}
      <div className="question-footer">
        <button onClick={handleChangeQuestion}>Go to next question 👉</button>
      </div>
    </div>
  );
}
