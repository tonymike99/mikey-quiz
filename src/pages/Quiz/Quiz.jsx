import styles from "./Quiz.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDocumentTitle, useAxios } from "../../hooks/custom/index";
import { QuizCard, Rules } from "../../components/index";
import { apiUrls } from "../../data/index";

function Quiz() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Questions");

  // ****************************************************************************************************

  // GET DATA

  const params = {
    method: "get",
    baseURL: "https://opentdb.com",
    url: apiUrls[useLocation().pathname.slice(9)],
  };

  const { response, loading, error } = useAxios(params);

  const [quizData, setQuizData] = useState(null);

  useEffect(() => {
    if (response !== null) {
      setQuizData(response.results);
    }
  }, [response]);

  // ****************************************************************************************************

  // To start quiz

  const [startQuiz, setStartQuiz] = useState(false);

  const handlerStartQuiz = () => {
    setStartQuiz(true);
  };

  // ****************************************************************************************************

  return (
    <main>
      {!startQuiz && (
        <section>
          {loading && <h3 className="h3 text-center">Loading quiz...</h3>}
          {error && <p className="text-bold text-center">{error.message}</p>}
        </section>
      )}

      {!error && !startQuiz && (
        <section className="flex-center">
          <Rules />

          <button className="btn primary" onClick={handlerStartQuiz}>
            Start Quiz
          </button>
        </section>
      )}

      {!error && startQuiz && (
        <section className="flex-center">
          {quizData.map((quizDatum, index) => (
            <QuizCard key={index} quizDatum={quizDatum} index={index} />
          ))}

          <Link to="result">
            <button className="btn danger">End Quiz</button>
          </Link>
        </section>
      )}
    </main>
  );
}

export { Quiz };
