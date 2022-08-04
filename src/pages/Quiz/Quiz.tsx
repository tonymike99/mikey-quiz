import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDocumentTitle, useAxios } from "../../hooks/custom/index";
import { QuizCard, Rules } from "../../components/index";
import { getApiUrl } from "../../data/index";

function Quiz(): JSX.Element {
  // SET DOCUMENT TITLE
  useDocumentTitle("Questions");

  // ****************************************************************************************************

  const location = useLocation();

  // GET DATA

  type Params = {
    method: string;
    baseURL: string;
    url: any;
  };

  const params: Params = {
    method: "get",
    baseURL: "https://opentdb.com",
    url: getApiUrl(location.pathname),
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
      <section>
        {loading && <h3 className="h3 text-center">Loading quiz...</h3>}
        {error && <p className="text-bold text-center">{error.message}</p>}
      </section>

      {!loading && !error && !startQuiz && (
        <section className="flex-center">
          <Rules />

          <button className="btn primary" onClick={handlerStartQuiz}>
            Start Quiz
          </button>
        </section>
      )}

      {startQuiz && (
        <section className="flex-center">
          {quizData.map(
            (
              quizDatum: {
                question: string;
                correct_answer: string;
                incorrect_answers: string[];
              },
              index: number
            ) => (
              <QuizCard key={index} quizDatum={quizDatum} index={index} />
            )
          )}

          <Link to="result">
            <button className="btn danger">End Quiz</button>
          </Link>
        </section>
      )}
    </main>
  );
}

export { Quiz };
