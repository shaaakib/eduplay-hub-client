import React, { useContext } from 'react';

import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

export default function PrivateRoutes({ children }) {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex items-center justify-center space-x-2 animate-bounce">
        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div className="w-8 h-8 bg-green-400 rounded-full"></div>
        <div className="w-8 h-8 bg-black rounded-full"></div>
      </div>
    );
  }
  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" replace />;
}
