import { createContext, useState } from "react";
import {PropTypes} from 'prop-types'

export const UserContext = createContext({
  userInfo: {}, // Default value for userInfo
  setUserInfo: () => {},
  isLogin: null,
  setIsLogin: () => {},

});


export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [isLogin, setIsLogin] = useState(null);


  UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired
  };

  return (
    <UserContext.Provider value={{userInfo, setUserInfo, isLogin, setIsLogin}}>
      {children}
    </UserContext.Provider>
  );
}
