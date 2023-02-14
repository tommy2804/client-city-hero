import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import './statistics.css';

const TitelGraph = ({ requests }) => {
  const data = [
    { name: 'Parking', color: '#eece9f' },
    { name: 'Garbage', color: '#dda15e' },
    { name: 'Sewerage', color: '#b97527' },
    { name: 'Noise', color: '#a3b18a' },
    { name: 'A hazard in the street', color: '#588157' },
    { name: 'Other', color: '#3a5a40' },
  ];

  return (
    <div className="graph">
      <h3>Title Graph</h3>

      <div className="graphANDlabels">
        <div className="pai">
          <PieChart
            animation
            animationDuration={500}
            animationEasing="ease-out"
            center={[50, 50]}
            labelStyle={{
              fill: '#0d1b2a',
              fontSize: '10px',
            }}
            label={({ dataEntry }) => (dataEntry.value ? dataEntry.value : '')}
            data={[
              ...data.map((titel) => ({
                title: titel.name,
                value: requests.filter((req) => req.reqTitle == titel.name).length,
                color: titel.color,
              })),
            ]}
          />
        </div>
        <div className="labels">
          {data.map((titel) => (
            <span style={{ fontSize: '14px' }}>
              <i style={{ color: titel.color }} className="fa-solid fa-circle"></i> {titel.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TitelGraph;
