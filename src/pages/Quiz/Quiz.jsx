import styles from "./Quiz.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDocumentTitle, useAxios } from "../../hooks/custom/index";
import { QuizCard, Rules } from "../../components/index";

function Quiz() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Questions");

  // ****************************************************************************************************

  // GET DATA

  const params = {
    method: "get",
    baseURL: "https://opentdb.com",
    url: "/api.php?amount=10&category=30&difficulty=easy&type=multiple&encode=url3986",
  };

  const { response, loading, error } = useAxios(params);

  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setQuizData(response.results);
    }
  }, [response]);

  // ****************************************************************************************************

  const [startQuiz, setStartQuiz] = useState(false);

  const handlerStartQuiz = () => {
    setStartQuiz(true);
  };

  // ****************************************************************************************************

  return (
    <div className={styles["main-container"]}>
      <main className={styles.main}>
        {!startQuiz && <Rules />}

        {!startQuiz && (
          <button className="btn primary" onClick={handlerStartQuiz}>
            Start Quiz
          </button>
        )}

        {startQuiz &&
          quizData.map((quizDatum, index) => (
            <QuizCard
              key={quizDatum.question}
              quizDatum={quizDatum}
              index={index}
            />
          ))}

        {startQuiz && (
          <Link to="/result">
            <button className="btn danger">End Quiz</button>
          </Link>
        )}
      </main>
    </div>
  );
}

export { Quiz };