import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

function Main() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Main;
