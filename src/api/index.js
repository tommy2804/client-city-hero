import axios from 'axios';
import { async } from 'q';

const API = axios.create({ baseURL: 'http://localhost:4001' });

API.interceptors.request.use((req) => {
  // before all the request so that we can send the token back to middlware so he can check the specific token
  if (localStorage.getItem('User')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('User')).token}`;
  }
  return req;
});

export const register = async (formData) => await axios.post('http://localhost:4001/auth/register', formData);
export const login = async (formData) => await axios.post('http://localhost:4001/auth/login', formData);

export const getRequests = async () => await API.get(`/request/getMunicipalityRequests`);

export const sendToInspector = async (reqId, data) => await API.put(`/request/municipalityUpdate/${reqId}`, data);

export const getInspectors = async () => await API.get(`/users/getInspectors`);

export const sortRequests = async (value, kind) => {
  if (kind === 'Municipality-urgency') {
    const {data} = await API.get(`/request/getRequestsByUrgencyMunicipality/${value}`);
    return data
  }
  if (kind === 'Municipality-status') {
    return await API.get(`request/getRequestsByStatusMunicipality/${value}`);
  }
  if (kind === 'Municipality-Inspector') {
    if (value === 'all') {
      return;
    }
    return await API.get(`request/getInspectorRequests/${value}`);
  }
};
