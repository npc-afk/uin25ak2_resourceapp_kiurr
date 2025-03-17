import { useEffect } from "react";

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = `${title} | Ressursarkiv`;
  }, [title]);

  return <h2>{title}</h2>;
};

export default PageTitle;