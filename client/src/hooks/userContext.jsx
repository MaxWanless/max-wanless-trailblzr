import React from "react";
import jwt_decode from "jwt-decode";
export const UserContext = React.createContext();

export const UserProvider = ({ children, initialUser }) => {
  const [user, setUser] = React.useState(initialUser);

  if (!user.firstName) {
    if (sessionStorage.getItem("authorization")) {
      let token = sessionStorage.getItem("authorization").split(" ")[1];
      setUser(jwt_decode(token));
    }
  }
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
