import React, {useState} from "react";
import { createContext } from "react";
import axios from "axios";

export const MyContext = createContext()

const API = axios.create({ baseURL: 'https://server-cityhero.onrender.com' });
API.interceptors.request.use((req) => {
  // before all the request so that we can send the token back to middlware so he can check the specific token
  if (localStorage.getItem('User')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('User')}`;
  }
  return req;
});
const ContextProvider = (props) => {



    const{children} = props
    const [requests, setRequests] = useState([]);
    const [inspectors, setInspectors] = useState([]);
    const [showRequest, setShowRequest] = useState(null);
    const [showRequestOnMap, setShowRequestOnMap] = useState([]);
    const [showInspectorOnMap, setShowInspectorOnMap] = useState([]);
    const [showRequestUrgency, setShowRequestUrgency] = useState(null);
    const [showRequestInspector, setShowRequestInspector] = useState(null);
    const [center, setCenter] = useState({ lat: 32.0872401, lng: 34.8041696 });
    const [open,setOpen]=useState(false)
    const [mainPage, setMainpage]= useState("HomePage")



      async function getRequests() {
        const { data } = await API.get('/request/getMunicipalityRequests');
        setRequests(data);
        setShowRequestOnMap(data);
      }
      async function sendToInspector() {
        if (showRequestUrgency && showRequestInspector) {
          await API.put(`/request/municipalityUpdate/${showRequest._id}`, {urgency: showRequestUrgency,inCharge: showRequestInspector.id,});
          getRequests();
          setShowRequest(null);
          document.getElementById('sendToInspectorBTN').innerHTML='Sent Successfully'
          document.getElementById('sendToInspectorBTN').style.color='green'
          document.getElementById('alrt' + showRequest._id).innerHTML ='';
        } else {
          document.getElementById('alrt' + showRequest._id).innerHTML =
            'Urgency needs to be fulfilled and choose who inCharge';
        }
      }
      async function getInspectors() {
        const { data } = await API.get('/users/getInspectors');
        console.log(data)
        setInspectors(data);
        setShowInspectorOnMap(data);
      }
      async function sortRequests(value, kind) {
        if (kind == 'Municipality-urgency') {
          const { data } = await API.get(
            `/request/getRequestsByUrgencyMunicipality/${value}`
          );
          console.log(data)
          setRequests(data);
          setShowRequestOnMap(data);
        }
        if (kind == 'Municipality-status') {
          const { data } = await API.get(
            `/request/getRequestsByStatusMunicipality/${value}`
          );
          setRequests(data);
          setShowRequestOnMap(data);
        }
        if (kind == 'Municipality-inspector') {
          if (value == 'all') {
            getRequests();
            setShowInspectorOnMap(inspectors);
    
            return;
          }
          const { data } = await API.get(
            `/request/getInspectorRequests/${value}`
          );
          setShowRequestOnMap(data);
          setShowInspectorOnMap(inspectors.filter((inspector) => inspector._id == value));
        }
      }
      async function addInspector(formData) {
        await API.post('/auth/register',{...formData,role:'inspector'});
      }
 

    
    return ( 
        <MyContext.Provider value={{
            open,setOpen,
            requests,setRequests,
            inspectors,setInspectors,
            showRequest,setShowRequest,
            showRequestOnMap,setShowRequestOnMap,
            showInspectorOnMap,setShowInspectorOnMap,
            showRequestUrgency,setShowRequestUrgency,
            showRequestInspector,setShowRequestInspector,
            center,setCenter,
            mainPage, setMainpage,
            getRequests,sendToInspector,getInspectors,sortRequests,addInspector
            }} >
            {children}
        </MyContext.Provider>
     )

    
}
 
export default ContextProvider;
