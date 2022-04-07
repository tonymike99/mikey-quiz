import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/custom/index";

function Login() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Login");

  // ****************************************************************************************************

  return (
    <div className={styles["main-container"]}>
      <main className={styles.main}>
        <section className="login-signup-section">
          <h2 className="font-montserrat margin-bottom-2">LOGIN</h2>
          <form className="form-spacing" action="#">
            <input type="email" id="emailInput" placeholder="Email Address" />
            <input type="password" id="passwordInput" placeholder="Password" />
            <button className="btn btn-primary btn-width-100" type="submit">
              Login
            </button>
            <small>
              Don't have an account?
              <Link to="/signup" className="styled-link">
                {" "}
                Sign up
              </Link>
            </small>
          </form>
        </section>
      </main>
    </div>
  );
}

export { Login };
