import React from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
export const UserContext = React.createContext();

export const UserProvider = ({ children, initialUser }) => {
  const [user, setUser] = React.useState(initialUser);
  const [signOut, setSignOut] = React.useState(false);
  const [enableEdit, setEnableEdit] = React.useState(true);
  const navigate = useNavigate();

  const handleSignOut = () => {
    sessionStorage.removeItem("authorization");
    localStorage.removeItem("authorization");
    setEnableEdit(true);
    setUser({});
    setSignOut(true);
    navigate("/");
  };

  const handleEditUser = () => {
    setEnableEdit(!enableEdit);
  };

  if (!user.firstName) {
    if (sessionStorage.getItem("authorization")) {
      let token = sessionStorage.getItem("authorization").split(" ")[1];
      setUser(jwt_decode(token));
    }
  }
  
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        signOut,
        setSignOut,
        handleSignOut,
        enableEdit,
        setEnableEdit,
        handleEditUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
