import React from "react"; // must Import
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogOut: () => {},
});
export default AuthContext;
