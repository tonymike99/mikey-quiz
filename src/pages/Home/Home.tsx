import { Link } from "react-router-dom";
import { Card } from "../../components/index";
import { useDocumentTitle } from "../../hooks/custom/index";
import { quizCategories } from "../../data/quizCategories";

function Home(): JSX.Element {
  // SET DOCUMENT TITLE
  useDocumentTitle("Home");

  // ****************************************************************************************************

  return (
    <main>
      <section className="categories">
        {quizCategories.map((category) => (
          <Link key={category._id} to={`${category.name}`}>
            <Card key={category._id} category={category} />
          </Link>
        ))}
      </section>
    </main>
  );
}

export { Home };
