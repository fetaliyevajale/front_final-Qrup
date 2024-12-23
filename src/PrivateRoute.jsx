// src/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, path }) {
  const isAuthenticated = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("role") === "admin";

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (path.startsWith("/admin") && !isAdmin) {
    return <Navigate to="/home" replace />;
  }

  return children;
}

export default PrivateRoute;
