import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `Mikey Quiz ${title}`;
  }, [title]);
};

export { useDocumentTitle };
