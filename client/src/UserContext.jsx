import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const UserContext = createContext({
  userInfo: {}, // Default value for userInfo
  setUserInfo: () => {},
});

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  // const [isAuthenticated, setAuthenticated] = useState(false);

  UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired
  };

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo}}>
      {children}
    </UserContext.Provider>
  );
}

