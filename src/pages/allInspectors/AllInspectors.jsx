import { CleaningServices } from '@mui/icons-material';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../context/context';
import './AllInspectors.css'
import Inspector from './inspector';

const AllInspectors = () => {
  const {getInspectors, inspectors} = useContext (MyContext);


  useEffect(() => {getInspectors();}, []);
  return (

      <div className='inspectorCardsPage'>
          {inspectors.map(inspector=>
          <Inspector key={inspector._id}  inspector={inspector}/>
          )}
      </div>

  );
};

export default AllInspectors;
