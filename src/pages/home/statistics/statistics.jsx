import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../../context/context';
import './statistics.css'
import StatusGraph from './statusGraph';
import TimelGraph from './timeGraph';
import TitelGraph from './titelGraph';

const Statistics = () => {
  const {getRequests, getInspectors, requests, center, inspectors} = useContext (MyContext);
  useEffect(() => {getRequests();getInspectors();}, []);

  return (
  
    <div className='statisticsPage'>
      {/* <h2>Some statistics</h2> */}
      <div className='statisticsGraph'>
          <StatusGraph requests={requests} />
          <TitelGraph requests={requests}/>
          <TimelGraph requests={requests}/>
      </div>
    </div>
  
  );
};

export default Statistics;
