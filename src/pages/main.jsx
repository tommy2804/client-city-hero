import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/index';
import Sidebar from '../components/sidebar/index';


const Main = () => {

  return (
    <>
    <div style={{ position:''}}>
      <Navbar/>
    </div>
    <Outlet />
    <Sidebar />   

  </>

  );
};

export default Main;
