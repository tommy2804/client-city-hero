import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { MyContext } from '../../../context/context';
import { CustomSelect } from '../../../components/custom/Select/dropdown';
import './Filters.css';

const Filters = () => {
  const { getRequests, getInspectors, sortRequests } = useContext(MyContext);
  return (
    <div className="MyFilters">
      <button
        className="getAllBTN"
        onClick={() => {
          getRequests();
          getInspectors();
        }}>
        get all reports
      </button>
      <CustomSelect onChange={sortRequests} option={'status'} />
      <CustomSelect onChange={sortRequests} option={'urgency'} />
    </div>
  );
};

export default Filters;
