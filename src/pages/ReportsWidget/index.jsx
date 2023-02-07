import ReportWidget from './Report';
import { useQuery } from 'react-query';
import { getRequests } from '../../api';
import { useDispatch } from 'react-redux';
import { addReports, setReport, updateReports } from '../../state/slices/ReportSlice';
import './index.css'

const ReportsWidget = ({ requests }) => {
  // const dispatch = useDispatch();
  // const { data, isError, isLoading, error } = useQuery('reports', getRequests);
  // if (isLoading) return <div>Loading....</div>;
  // if (isError) return <div>Error :{error}</div>;
  // else if (data) {
  //   // console.log(data.data);
  //   dispatch(addReports(data.data));
  //   dispatch(updateReports(data.data));
  // }

  return (
    <div className='allReports'>
      {requests.map((report) => (
        <ReportWidget key={report._id} report={report} />
      ))}
    </div>
  );
};

export default ReportsWidget;
