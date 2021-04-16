import React, { useState, createContext } from "react";

export const SpinnerContext = createContext();

export const SpinnerProvider = (props) => {
  const [loading, setLoading] = useState(false);

  return (
    <SpinnerContext.Provider value={[loading, setLoading]}>
      {props.children}
    </SpinnerContext.Provider>
  );
};
