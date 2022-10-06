import React from "react";

export const UserContext = React.createContext();

export const UserProvider = ({ children, initialUser }) => {
  const [user, setUser] = React.useState(initialUser);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
