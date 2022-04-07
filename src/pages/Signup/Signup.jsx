import styles from "./Signup.module.css";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/custom/index";

function Signup() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Signup");

  // ****************************************************************************************************

  return (
    <div className={styles["main-container"]}>
      <main className={styles.main}>
        <section className="login-signup-section">
          <h2 className="font-montserrat margin-bottom-2">SIGN UP</h2>
          <form className="form-spacing" action="#">
            <input type="text" id="nameInput" placeholder="Name" />
            <input type="tel" id="phoneInput" placeholder="Phone Number" />
            <input type="email" id="emailInput" placeholder="Email Address" />
            <input type="password" id="passwordInput" placeholder="Password" />
            <button className="btn btn-primary btn-width-100" type="submit">
              Sign up
            </button>
            <small>
              Have an account?
              <Link to="/login" className="styled-link">
                {" "}
                Log in
              </Link>
            </small>
          </form>
        </section>
      </main>
    </div>
  );
}

export { Signup };
