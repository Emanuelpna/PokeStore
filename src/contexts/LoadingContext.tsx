import React, { useState } from "react";

import { ILoadingContext, ILoadingProps } from "./Loading";

export const LoadingContext = React.createContext<ILoadingContext>(
  {} as ILoadingContext
);

const LoadingContextProvider: React.FC<ILoadingProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const openLoading = () => {
    console.log("openLoading")
    setLoading(true);
  };
 
  const closeLoading = () => {
    console.log("closeLoading")
    setLoading(false);
  };

  return (
    <LoadingContext.Provider
      value={{ loading, openLoading, closeLoading }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContextProvider;
