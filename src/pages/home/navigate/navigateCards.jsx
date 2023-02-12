import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../../context/context';
import './navigateCards.css'


const NavigateCards = () => {
  const navigate=useNavigate();

  return (
  
    <div className='navigate'>

          <div class="card">
            <div class="card-details">
              <p class="text-title">Add Inspector</p>
              <p class="text-body">Add new inspectors to the system so you can improve the speed of responding to reports</p>
            </div>
            <button class="card-button" onClick={()=>navigate('/Main/AddInspector')}>Let's Go  <i class="fa-solid fa-user-plus"></i></button>
          </div>
          <div class="card">
            <div class="card-details">
              <p class="text-title">Inspectors Handler</p>
              <p class="text-body">Track the activity of your inspectors, find them on the map, get their personal details and monitor their work</p>
            </div>
            <button class="card-button" onClick={()=>navigate('/Main/AllInspectors')}>Let's Go <i class="fa-sharp fa-solid fa-user-police-tie"></i></button>
          </div>
          <div class="card">
            <div class="card-details">
              <p class="text-title">Report Handler</p>
              <p class="text-body">See all the reports in the city, check the status of reports and inspectors on the map and determine urgency and hoe in charge for reports that have not yet been handled</p>
            </div>
            <button class="card-button" onClick={()=>navigate('/Main/ReportHandler')}>Let's Go <i class="fa-regular fa-file"></i></button>
          </div>

    </div>
  
  );
};

export default NavigateCards;
