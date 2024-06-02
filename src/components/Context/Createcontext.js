import React, { createContext, useState } from "react";

export const Mycontext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  return (
    <Mycontext.Provider value={{ user, setUser }}>
      {children}
    </Mycontext.Provider>
  );
};

export default ContextProvider;


