import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './state/store';
import { Provider } from 'react-redux';
import ReportHandler from './pages/ReportHandler/ReportHandler';
import SignUp from './pages/signUp';
import AddReq from './pages/addReq/addReq';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import ContextProvider from './context/context';
import Navbar from './components/navbar';
import Main from './pages/main';
import AddInspector from './pages/addInspector/AddInspector';
import AllInspectors from './pages/allInspectors/AllInspectors';
import Home from './pages/home/home';
import Page404 from './pages/404/page404';


const App = () => {
  const queryClient = new QueryClient();
  const token=localStorage.getItem('User')
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <ContextProvider>
              <div>
                <Routes>
                  <Route path="/" element={<SignUp />} />
                  {token &&(
                  <Route path="/Main" element={<Main />} >
                    <Route path="/Main" element={<Home/>} />
                    <Route path="/Main/ReportHandler" element={<ReportHandler/>} />
                    <Route path="/Main/addreq" element={<AddReq/>} />
                    <Route path="/Main/AddInspector" element={<AddInspector/>} />
                    <Route path="/Main/AllInspectors" element={<AllInspectors/>} />
                  </Route>
                  )}
                  <Route path="*" element={<Page404 />} />
                </Routes>
              </div>
            </ContextProvider>
          </Provider>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
