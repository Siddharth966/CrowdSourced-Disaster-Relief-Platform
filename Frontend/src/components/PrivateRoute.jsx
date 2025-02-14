// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  // Check if a token exists in localStorage
  const token = localStorage.getItem('token');

  // If token exists, render the child components (e.g., landing page)
  // If token does not exist, redirect to the login page
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;