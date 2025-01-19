import React from "react";
export const NavFixedContext = createContext();

const IsFixedContextProvider = ({ children }) => {
  return (
    <div>
      <NavFixedContext.Provider value={{ menutoggle, setmenutoggle }}>
        {children}
      </NavFixedContext.Provider>
    </div>
  );
};

export default IsFixedContextProvider;
