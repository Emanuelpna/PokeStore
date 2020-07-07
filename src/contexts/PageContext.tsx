import React, { useState } from "react";

// import Utils from "../services/Utils";
// import CharizardMock from "../services/CharizardMock";

import { IPageContext, IPageProps } from "./Page";

export const PageContext = React.createContext<IPageContext>(
  {} as IPageContext
);

const PageContextProvider: React.FC<IPageProps> = ({ children }) => {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(page + 1);

    return true;
  };

  const previousPage = () => {
    const newPage = page === 1 ? page : page - 1;

    setPage(newPage);

    return true;
  };

  const setPageNumber = (pageNumber: number) => {
    if (pageNumber < 1) return false;

    const newPage = pageNumber < 1 ? page : page;

    setPage(newPage);

    return true;
  };

  return (
    <PageContext.Provider
      value={{ nextPage, previousPage, setPage, page, setPageNumber }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
