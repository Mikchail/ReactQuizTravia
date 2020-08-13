import { useState, useCallback, useEffect } from "react";

export default function useTravia() {
  const [question, setQuestion] = useState(null);
  const [category, setCategory] = useState("any");
  const getQuestion = useCallback(() => {
    let url = "https://opentdb.com/api.php?amount=1";
    if (category !== "any") url += `&category=${setCategory}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setQuestion(data.results[0]);
        console.log(data.results[0]);
      }).catch(alert);
  }, [category]);
  useEffect(() => {
    getQuestion();
  }, [getQuestion, setCategory]);

  return { setCategory, category, getQuestion, question };
}
