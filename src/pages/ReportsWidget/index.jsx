import { useEffect, useState } from 'react';
import ReportWidget from './Report';
import { useQuery } from 'react-query';
import { getRequests } from '../../api';
import { useDispatch } from 'react-redux';
import { addReports } from '../../state/slices/ReportSlice';

const ReportsWidget = ({ reports }) => {
  const dispatch = useDispatch();
  const { data, isError, isLoading, error } = useQuery('reports', getRequests);
  if (isLoading) return <div>Loading....</div>;
  if (isError) return <div>Error :{error}</div>;
  else if (data) {
    // console.log(data.data);
    dispatch(addReports(data.data));
  }

  return (
    <>
      {reports.map((report, { reqDescription }) => (
        <ReportWidget key={report._id} description={reqDescription} report={report} />
      ))}
    </>
  );
};

export default ReportsWidget;
