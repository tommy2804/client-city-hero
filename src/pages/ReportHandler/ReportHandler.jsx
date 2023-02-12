import React, { useContext, useEffect, useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import MapsWidget from './MapsWidget';
import axios from 'axios';

import ShowRequset from './showRequset/showRequset';
import RequsetBar from './requsetBar';
import Navbar from '../../components/navbar';
import ReportsWidget from './ReportsWidget/index.jsx';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../../components/sidebar/index';
import { CustomSelect } from '../../components/custom/Select/dropdown';
import { MyContext } from '../../context/context';
import Filters from './Filters/Filters';

const ReportHandler = () => {
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');
  const {getRequests, getInspectors, requests, center, inspectors} = useContext (MyContext);

  useEffect(() => {getRequests();getInspectors();}, []);
  
  return (
    <>
      <Box
        width="100%"
        padding="2rem 0"
        display={isNonMobileScreens ? 'flex' : 'block'}
        gap="0.5rem"
        justifyContent="center"
        backgroundColor= '#dee2e6'
        >

        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' flexBasis="35%" height="">
          <h2 style={{fontFamily: 'Georgia, serif' ,fontWeight:'600', marginBottom:'4%'}}>Tel Aviv Reports</h2>
          <ReportsWidget />
        </Box>

        <Box
          flexBasis={isNonMobileScreens ? '45%' : undefined}
          padding={isNonMobileScreens ? undefined : '2rem'}
          m="0 0.7rem"
          >
          <Filters/>
          <MapsWidget inspectors={inspectors} requests={requests} center={center} />
        </Box>
          <ShowRequset/>
      </Box>
    </>
  );
};

export default ReportHandler;
