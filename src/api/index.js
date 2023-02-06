import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4001' });

// API.interceptors.request.use((req) => {
//   // before all the request so that we can send the token back to middlware so he can check the specific token
//   if (localStorage.getItem('User')) {
//     req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//   }
//   return req;
// });

export const register = (formData) => API.post('/auth/register', formData);
export const login = (formData) => API.post('/auth/login', formData);
