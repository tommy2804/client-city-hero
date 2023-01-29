import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './state/store';
import { Provider } from 'react-redux';
import HomePage from './pages/home/HomePage';
import SignUp from './pages/signUp';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/HomePage" element={<HomePage />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
