import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { Card, Slideshow } from "../../components/index";
import { quizCategories } from "../../data/quizCategories";

function Home() {
  return (
    <>
      <main className={styles.main}>
        {true && (
          <section className={styles["categories"]}>
            {quizCategories.map((category) => (
              <Link key={category._id} to={`/category/${category.name}`}>
                <Card key={category._id} category={category} />
              </Link>
            ))}
          </section>
        )}
      </main>
      <Slideshow />
    </>
  );
}

export { Home };
