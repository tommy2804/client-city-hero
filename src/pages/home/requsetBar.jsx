import React from 'react'
import { Box } from '@mui/material';

export default function RequsetBar({request,setShowRequest,setShowRequestOnMap,setCenter,setShowRequestInspector,setShowRequestUrgency}) {

 return (
    <Box
            border='2px solid black'
            display='flex'
            gap='20px'
            backgroundColor={request.status=='Sent to the municipality'? 'grey':request.status=='Sent to the inspector'? 'blue': 'green' }
          >
            <p>{request.reqTitle}</p>
            <p>{request.urgency}</p>
            <button onClick={()=>{setShowRequest(request);setShowRequestOnMap([request]);setCenter(request.location);setShowRequestInspector(null);setShowRequestUrgency(null)}}>open request</button>
          </Box>
  )
}
