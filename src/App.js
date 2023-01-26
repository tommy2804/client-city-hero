import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/signUp';

const App = () => {
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default App;
