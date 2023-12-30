import  { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";


function Protected(props) {
  const { Component } = props;
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated, for example, by looking at a token in localStorage
    const token = localStorage.getItem("authToken");
    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  if (!authenticated) {
    // Redirect to the login page if not authenticated
    return <Navigate to="/signin" />;
  }

  return <div>{authenticated && <Component />}</div>;
}


Protected.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default Protected;
