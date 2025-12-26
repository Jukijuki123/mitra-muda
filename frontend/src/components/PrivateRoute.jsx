// src/components/PrivateRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

const PrivateRoute = ({ children }) => {
    if (isAuthenticated()) {
        return children;
    }

    // Jika tidak login, kembalikan ke Login
    return <Navigate to="/login" />;
};

export default PrivateRoute;