// AuthProvider.jsx
import { useEffect, useState, createContext } from "react";
// import { useNavigate } from "react-router-dom";
import propTypes from 'prop-types';
// import { useAuth } from "./useAuth" // Update the path


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    console.log("isAuthenticated:", isAuthenticated);
  }, [isAuthenticated]);

  const login = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const requireAuth = () => {
    return new Promise((resolve, reject) => {
      if (!isAuthenticated) {
        reject("User not authenticated");
      } else {
        resolve();
      }
    });
  };
  


  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, requireAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
    children: propTypes.node.isRequired,
  };



export  { AuthProvider , AuthContext };
