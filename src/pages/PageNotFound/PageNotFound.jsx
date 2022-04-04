import styles from "./PageNotFound.module.css";
import { useDocumentTitle } from "../../hooks/custom/index";

function PageNotFound() {
  // SET DOCUMENT TITLE
  useDocumentTitle("PageNotFound");

  // ****************************************************************************************************

  return (
    <>
      <div className={styles.errorImage}></div>
    </>
  );
}

export { PageNotFound };
