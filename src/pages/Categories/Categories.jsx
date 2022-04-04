import styles from "./Categories.module.css";
import { Link } from "react-router-dom";
import { Card } from "../../components/index";
import { quizCategories } from "../../data/quizCategories";
import { useDocumentTitle } from "../../hooks/custom/index";

function Categories() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Categories");

  // ****************************************************************************************************

  return (
    <div className={styles["main-container"]}>
      <main className={styles.main}>
        {quizCategories.map((quizCategory) => (
          <>
            <section id={quizCategory.name} className={styles["categories"]}>
              <h1 className="font-montserrat margin-bottom-2">
                {quizCategory.name.toUpperCase()}
              </h1>

              {quizCategory.subCategories.map((category) => (
                <Link
                  key={category._id}
                  to={`/categories/entertainment/${category.name}`}
                >
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
