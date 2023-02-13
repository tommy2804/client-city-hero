import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './page404.css';

const Page404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('User')) navigate('/Main');
  }, []);

  return (
    <>
      <div className="Page404">
        <img src="/assets/ciytHero-logo.png" alt="" />
        <h1>error 404</h1>
        <p>Something stinks here, go back to the login page</p>
      </div>
    </>
  );
};

export default Page404;
