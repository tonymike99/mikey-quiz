import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `Mikey Quiz ${title}`;

    return () => {
      console.log("Cleanup");
    };
  }, [title]);
};

export { useDocumentTitle };
