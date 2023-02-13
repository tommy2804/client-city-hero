import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './AllInspectors.css'
import { PieChart } from 'react-minimal-pie-chart';
import { CleaningServices, SignalWifiConnectedNoInternet4Sharp } from '@mui/icons-material';
import InspectorMap from './inspectorMap';




export default function Inspector({inspector}) {
    const [myRequests , setMyRequests]= useState([])
    const [openMap , setOpenMap]= useState(false)

    useEffect(() => {getInspectorRequests()}, []);

    async function getInspectorRequests() {
        const { data } = await axios.get(`https://server-cityhero.onrender.com/request/getInspectorRequests/${inspector._id}`);
        setMyRequests(data)
    }

    return (
    <div className='inspectorCard'>

        <div className='inspectorCardAfterHover' >
            <div className='subMain'>
                <div>
                    totalReq: {myRequests.length}
                </div>
                <div>
                    <span style={{fontSize:'14px',color: "#a9def9"}}><i  className="fa-solid fa-circle"></i> Need to hendal </span> <span style={{fontSize:'14px',color: "#d0f4de"}}><i className="fa-solid fa-circle"></i> Done </span>
                </div>
                <PieChart
                animation
                animationDuration={5000}
                animationEasing="ease-out"
                center={[50, 50]}
                    labelStyle={{
                        fill: '#0d1b2a',
                        fontSize: '10px'
                   }}
                   
                    label={({ dataEntry }) => dataEntry.value? dataEntry.value:'' }
                    data={[
                        { title: 'Sent to the inspector', value: myRequests.filter(req=> req.status=='Sent to the inspector').length, color: '#a9def9' },
                        { title: 'Hendeled by the inspector and returned to Municipality', value: myRequests.filter(req=> req.status=='Hendeled by the inspector and returned to Municipality').length, color: '#d0f4de' },
                    ]}
                />
            </div>
            <div className='subEnd'>
                <button className='delet' onClick={()=>{setOpenMap(true)}}>
                {/* <button className='delet' > */}
                    <span class="shadow"></span>
                    <span class="edge"></span>
                    <span class="front text"> See {inspector.firstName} on the map </span>
                </button>
            </div>
        </div>

        <div className='inspectorCardBeforeHover'>
            <div class="card-info">
            <div class="card-avatar"> <img style={{width: "150px"}} src="/assets/policeman.png" alt="" /></div>
            <div class="card-title">{inspector.firstName} {inspector.lastName}</div>
            <div class="card-subtitle">{inspector.phoneNumber}</div>
            <div class="card-subtitle">{inspector.email}</div>
            </div>
        </div>
        <InspectorMap inspectors={[inspector]} openMap={openMap} setOpenMap={setOpenMap} requests={myRequests} center={inspector.location}/>
  </div>
  )
}
