import { useEffect } from "react";

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = `Mikey Quiz ${title}`;
  }, [title]);
};

export { useDocumentTitle };
