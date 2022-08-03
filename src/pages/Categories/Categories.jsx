import { Link } from "react-router-dom";
import { Card } from "../../components/index";
import { quizCategories } from "../../data/quizCategories";
import { useDocumentTitle } from "../../hooks/custom/index";
import { useLocation } from "react-router-dom";

function Categories() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Categories");

  const location = useLocation();

  // ****************************************************************************************************

  return (
    <main>
      {quizCategories
        .filter((category) => category.name === location.pathname.slice(1))
        .map((quizCategory) => (
          <section key={quizCategory._id} className="categories">
            {quizCategory.subCategories.map((category) => (
              <Link key={category._id} to={`${category.name}`}>
                <Card key={category._id} category={category} />
              </Link>
            ))}
          </section>
        ))}
    </main>
  );
}

export { Categories };
