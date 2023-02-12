import ReportWidget from './Report';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import './index.css'
import { useContext } from 'react';
import { MyContext } from '../../../context/context';

const ReportsWidget = () => {
  const {requests} = useContext (MyContext);


  return (
    <div className='allReports'>
      {requests.map((report) => (
        <ReportWidget key={report._id} report={report} />
      ))}
    </div>
  );
};

export default ReportsWidget;
