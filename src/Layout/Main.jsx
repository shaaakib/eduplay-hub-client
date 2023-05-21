import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';

export default function Main() {
  return (
    <div>
      <NavBar />
      <div className="md:min-h-[calc(100vh-32px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
