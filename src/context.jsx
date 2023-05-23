import React, { useContext, useState } from "react";

const appContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <appContext.Provider
      value={{ showNav, setShowNav, showModal, setShowModal }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(appContext);
};
