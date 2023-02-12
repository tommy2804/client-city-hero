import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import './statistics.css'

const StatusGraph = ({requests}) => {
  return (<div className='graph'>

    <h3>Status Graph</h3>

    <div className='graphANDlabels'>
      <div className='pai'>
      <PieChart
        animation
        animationDuration={50}
        // animationEasing="ease-out"
        center={[50, 50]}
            labelStyle={{
              fill: '#0d1b2a',
              fontSize: '10px'
            }}
            
            label={({ dataEntry }) => dataEntry.value? dataEntry.value:'' }
            data={[
              { title: 'Sent to the municipality', value: requests.filter(req=> req.status=='Sent to the municipality').length, color: '#e5e5e5' },
              { title: 'Sent to the inspector', value: requests.filter(req=> req.status=='Sent to the inspector').length, color: '#a9def9' },
              { title: 'Hendeled by the inspector and returned to Municipality', value: requests.filter(req=> req.status=='Hendeled by the inspector and returned to Municipality').length, color: '#d0f4de' },
            ]}
      />
      </div>
              <div className='labels'>
                <span style={{fontSize:'14px'}}><i style={{color: "#a9def9"}} className="fa-solid fa-circle"></i> Sent to the inspector </span>
                <span style={{fontSize:'14px'}}><i style={{color: "#d0f4de"}} className="fa-solid fa-circle"></i> Done </span>
                <span style={{fontSize:'14px'}}><i style={{color: "#e5e5e5"}} className="fa-solid fa-circle"></i> Didnt read yeat </span>
              </div>

    </div>

  </div>
)    
};

export default StatusGraph;
