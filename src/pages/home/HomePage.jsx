import React, { useEffect, useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import MapsWidget from './MapsWidget';
import axios from 'axios';

import ShowRequset from './showRequset';
import RequsetBar from './requsetBar';
import Navbar from '../../components/navbar';
import ReportsWidget from '../ReportsWidget';
import {
  selectReports,
  selectReport,
  filteredReport,
  updateReports,
} from '../../state/slices/ReportSlice';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../../components/sidebar/index';
import ReportWidget from '../ReportsWidget/Report';
import { CustomSelect } from '../../components/custom/Select/dropdown';

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');
  const reports = useSelector(selectReports);
  const report = useSelector(selectReport);
  const filteredReports = useSelector(filteredReport);
  console.log(report);
  const [requests, setRequests] = useState([]);
  const [inspectors, setInspectors] = useState([]);
  const [showRequest, setShowRequest] = useState(null);
  const [showRequestOnMap, setShowRequestOnMap] = useState([]);
  const [showInspectorOnMap, setShowInspectorOnMap] = useState([]);
  const [showRequestUrgency, setShowRequestUrgency] = useState(null);
  const [showRequestInspector, setShowRequestInspector] = useState(null);
  const [center, setCenter] = useState({ lat: 32.0872401, lng: 34.8041696 });
  const dispatch = useDispatch();
  useEffect(() => {
    getRequests();
    getInspectors();
  }, []);

  async function getRequests() {
    const { data } = await axios.get('http://localhost:4001/request/getMunicipalityRequests');
    setRequests(data);
    setShowRequestOnMap(data);
  }
  async function sendsendToInspector() {
    if (showRequestUrgency && showRequestInspector) {
      await axios.put(`http://localhost:4001/request/municipalityUpdate/${showRequest._id}`, {
        urgency: showRequestUrgency,
        inCharge: showRequestInspector.id,
      });
      // getRequests();
      setShowRequest(null);
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
    if (kind == 'Municipality-Urgency') {
      const { data } = await axios.get(
        `http://localhost:4001/request/getRequestsByUrgencyMunicipality/${value}`
      );
      setRequests(data);
      setShowRequestOnMap(data);
      dispatch(updateReports(data));
    }
    if (kind == 'Municipality-Status') {
      const { data } = await axios.get(
        `http://localhost:4001/request/getRequestsByStatusMunicipality/${value}`
      );
      setRequests(data);
      setShowRequestOnMap(data);
      dispatch(updateReports(data));
    }
    if (kind == 'Municipality-Citizen') {
      const { data } = await axios.get(`http://localhost:4001/request/getCitizenRequests/${value}`);
      setRequests(data);
    }
    if (kind == 'Municipality-Inspector') {
      if (value == 'all') {
        getRequests();
        setShowInspectorOnMap(inspectors);
        dispatch(updateReports(reports));

        return;
      }
      const { data } = await axios.get(
        `http://localhost:4001/request/getInspectorRequests/${value}`
      );
      setShowRequestOnMap(data);
      setShowInspectorOnMap(inspectors.filter((inspector) => inspector._id == value));
    }
  }
  const statuses = [
    { value: 'municipality', label: 'Sent to the municipality', isFixed: true },
    { value: 'inspector', label: 'Sent to the inspector' },
    {
      value: 'Hendeled',
      label: 'Hendeled by the inspector and returned ',
    },
  ];

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 0"
        display={isNonMobileScreens ? 'flex' : 'block'}
        gap="0.5rem"
        justifyContent="space-between">
        {isNonMobileScreens && (
          <Box flexBasis="15%" height="">
            <Sidebar />

            <ShowRequset
              inspectors={inspectors}
              showRequest={showRequest}
              sendsendToInspector={sendsendToInspector}
              setShowRequestUrgency={setShowRequestUrgency}
              showRequestInspector={showRequestInspector}
            />
          </Box>
        )}

        <Box
          width={isNonMobileScreens ? '50%' : undefined}
          padding={isNonMobileScreens ? '0 1rem' : 0}
          flexBasis={isNonMobileScreens ? '35%' : undefined}
          mt={isNonMobileScreens ? undefined : '2rem'}>
          <Box width="300px">
            <CustomSelect onChange={sortRequests} option={statuses} />
          </Box>

          <select
            name="reqByInspector"
            id="reqByUrgencyInspector"
            onChange={(e) => sortRequests(e.target.value, 'Municipality-Inspector')}>
            <option value={'all'}>get all req</option>
            {inspectors.map((inspector) => (
              <option key={inspector._id} value={inspector._id}>
                {inspector.firstName}
              </option>
            ))}
          </select>
          <ReportsWidget reports={reports} />
          {/* {reports.map((request) => (
            <RequsetBar
              key={request._id}
              request={request}
              setShowRequest={setShowRequest}
              setShowRequestOnMap={setShowRequestOnMap}
              setCenter={setCenter}
              setShowRequestInspector={setShowRequestInspector}
              setShowRequestUrgency={setShowRequestUrgency}
            />
          ))} */}
        </Box>

        <Box
          flexBasis={isNonMobileScreens ? '45%' : undefined}
          padding={isNonMobileScreens ? undefined : '2rem'}
          m="0 0.7rem">
          <button
            onClick={() => {
              getRequests();
              getInspectors();
            }}>
            get all
          </button>
          <select
            name="reqByUrgencyMunicipality"
            id="reqByUrgencyMunicipality"
            onChange={(e) => sortRequests(e.target.value, 'Municipality-Urgency')}>
            {nums.map((num) => (
              <option key={num} value={num}>
                {num}+
              </option>
            ))}
          </select>
          <select
            name="reqByStatusMunicipality"
            id="reqByStatusMunicipality"
            onChange={(e) => sortRequests(e.target.value, 'Municipality-Status')}>
            {/* {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))} */}
          </select>

          <MapsWidget
            center={center}
            requests={showRequestOnMap}
            inspectors={showInspectorOnMap}
            setShowRequestInspector={setShowRequestInspector}
          />
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
