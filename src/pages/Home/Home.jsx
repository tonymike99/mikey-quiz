import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { Card, Slideshow } from "../../components/index";
import { quizCategories } from "../../data/quizCategories";
import { useDocumentTitle } from "../../hooks/custom/index";

function Home() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Home");

  // ****************************************************************************************************

  return (
    <>
      <main className={styles.main}>
        <section className={styles["categories"]}>
          {quizCategories.map((category) => (
            <Link key={category._id} to={`/categories/#${category.name}`}>
              <Card key={category._id} category={category} />
            </Link>
          ))}
        </section>
      </main>
      <Slideshow />
    </>
  );
}

export { Home };
