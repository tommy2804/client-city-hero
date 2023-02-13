import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import './statistics.css'

const TimelGraph = ({requests}) => {
  // console.log(requests[16]?.createdAt)
  const date = new Date();
  const data=
  [{name:'today' ,color:'#277da1'},
   {name:'this week' ,color:'#43aa8b'},
   {name:'this month' ,color:'#f9c74f'},
 ]

  return (<div className='graph'>

    <h3>Time Graph</h3>

    <div className='graphANDlabels'>
      <div className='pai'>
      <PieChart
        animation
        animationDuration={50}
        animationEasing="ease-out"
        center={[50, 50]}
            labelStyle={{
              fill: '#0d1b2a',
              fontSize: '10px'
            }}
            
            label={({ dataEntry }) => dataEntry.value? dataEntry.value:'' }
            data={[...data.map(titel=>(
                { title: titel.name, value:3 , color: titel.color }  
            )
            ),
            ]}
      />
      </div>
              <div className='labels'>
              {data.map(titel=>(
                  <span style={{fontSize:'14px'}}><i style={{color:titel.color}}  className="fa-solid fa-circle"></i> {titel.name}</span> 
              ))}
              </div>

    </div>

  </div>
)    
};
// requests.filter(req=>).length
export default TimelGraph;
