import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import './ProtectedRoute.css';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token');
  const history = useHistory();

  const handleLoginRedirect = () => {
    history.push('/login');
  };

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          alert("You need to be logged in to access this page.");
          return (
            <div className="unauthenticated-container">
              <div className="unauthenticated-heading">Please log in to view this page.</div>
              <div className="unauthenticated-message">Click the button below to log in.</div>
              <button className="unauthenticated-button" onClick={handleLoginRedirect}>Login</button>
            </div>
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
