import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './state/store';
import { Provider } from 'react-redux';
import HomePage from './pages/home/HomePage';
import SignUp from './pages/signUp';
import AddReq from './pages/addReq/addReq';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <div>
              <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/AddReq" element={<AddReq />} />
              </Routes>
            </div>
          </Provider>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
