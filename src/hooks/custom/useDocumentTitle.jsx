import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `Quizothrill ${title}`;

    return () => {
      console.log("Cleanup");
    };
  }, [title]);
};

export { useDocumentTitle };
