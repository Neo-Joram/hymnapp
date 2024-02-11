import React, { createContext, useRef, useState } from "react";
import PropTypes from "prop-types";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const drawer = useRef(null);
  const [count, setCount] = useState(0);

  const providerValues = {
    drawer,
    count,
    setCount,
  };

  return (
    <MyContext.Provider value={providerValues}>{children}</MyContext.Provider>
  );
};

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
