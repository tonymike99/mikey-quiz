import styles from "./Categories.module.css";
import { Link } from "react-router-dom";
import { Card } from "../../components/index";
import { quizCategories } from "../../data/quizCategories";
import { useDocumentTitle } from "../../hooks/custom/index";
import { useLocation } from "react-router-dom";

function Categories() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Categories");

  // ****************************************************************************************************

  return (
    <div className={styles["main-container"]}>
      <main className={styles.main}>
        {quizCategories
          .filter(
            (category) => category.name === useLocation().pathname.slice(12)
          )
          .map((quizCategory) => (
            <>
              <h1 className="font-montserrat margin-bottom-2">
                {quizCategory.name.toUpperCase()}
              </h1>

              <section className="categories">
                {quizCategory.subCategories.map((category) => (
                  <Link key={category._id} to={`/quiz/${category._id}`}>
                    <Card key={category._id} category={category} />
                  </Link>
                ))}
              </section>

              <hr className="hr-thin" />
            </>
          ))}
      </main>
    </div>
  );
}

export { Categories };
