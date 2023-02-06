import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4001' });

API.interceptors.request.use((req) => {
  // before all the request so that we can send the token back to middlware so he can check the specific token
  if (localStorage.getItem('User')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('User')).token}`;
  }
  return req;
});

export const register = (formData) => API.post('/auth/register', formData);
export const login = (formData) => API.post('/auth/login', formData);

export const getRequests = async () => await API.get(`/request/getMunicipalityRequests`);

export const sendToInspector = async (reqId, data) =>
  await API.put(`/request/municipalityUpdate/${reqId}`, data);

export const getInspectors = async () => await API.get(`/users/getInspectors`);

export const sortRequests = async (value, kind) => {
  if (kind === 'Municipality-Urgency') {
    return await API.get(`/request/getRequestsByUrgencyMunicipality/${value}`);
  }
  if (kind === 'Municipality-Status') {
    return await API.get(`request/getRequestsByStatusMunicipality/${value}`);
  }
  if (kind === 'Municipality-Citizen') {
    return await API.get(`request/getCitizenRequests/${value}`);
  }
  if (kind === 'Municipality-Inspector') {
    if (value === 'all') {
      return;
    }
    return await API.get(`request/getInspectorRequests/${value}`);
  }
};
