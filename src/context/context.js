import React, {useState} from "react";
import { createContext } from "react";
import axios from "axios";

export const MyContext = createContext()

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
        const { data } = await axios.get('http://localhost:4001/request/getMunicipalityRequests');
        setRequests(data);
        setShowRequestOnMap(data);
      }
      async function sendToInspector() {
        if (showRequestUrgency && showRequestInspector) {
          await axios.put(`http://localhost:4001/request/municipalityUpdate/${showRequest._id}`, {urgency: showRequestUrgency,inCharge: showRequestInspector.id,});
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
        const { data } = await axios.get('http://localhost:4001/users/getInspectors');
        setInspectors(data);
        setShowInspectorOnMap(data);
      }
      async function sortRequests(value, kind) {
        if (kind == 'Municipality-urgency') {
          const { data } = await axios.get(
            `http://localhost:4001/request/getRequestsByUrgencyMunicipality/${value}`
          );
          console.log(data)
          setRequests(data);
          setShowRequestOnMap(data);
        }
        if (kind == 'Municipality-status') {
          const { data } = await axios.get(
            `http://localhost:4001/request/getRequestsByStatusMunicipality/${value}`
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
          const { data } = await axios.get(
            `http://localhost:4001/request/getInspectorRequests/${value}`
          );
          setShowRequestOnMap(data);
          setShowInspectorOnMap(inspectors.filter((inspector) => inspector._id == value));
        }
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
            getRequests,sendToInspector,getInspectors,sortRequests
            }} >
            {children}
        </MyContext.Provider>
     )

    
}
 
export default ContextProvider;
