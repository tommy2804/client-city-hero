import React from 'react'
import { Box } from '@mui/material';

export default function ShowRequset({inspectors,showRequest,sendsendToInspector,setShowRequestUrgency,showRequestInspector}) {

 return (
        <Box
            m="2rem 0"
            display='flex'
            flexDirection='column'
          >
            {showRequest && (
              <>
                <p> reqNumber: {showRequest.reqNumber} </p>
                <p> reqTitle: {showRequest.reqTitle} </p>
                <p> reqDescription: {showRequest.reqDescription} </p>
                <p> reqStreet: {showRequest.reqStreet}  reStreetNum: {showRequest.reStreetNum} </p>
                <img src={showRequest.reqPhoto} alt="No pic was add"/>
                {showRequest.urgency?<p> urgency: {showRequest.urgency} </p>: <><p>urgency:</p><input type="text" onChange={(e)=>setShowRequestUrgency(e.target.value)} /> </>}
                {showRequest.inCharge?<p> inCharge: {inspectors.filter(inspector=> inspector._id ==showRequest.inCharge)[0].firstName} </p>: <><p>inCharge:</p> {showRequestInspector? showRequestInspector.firstName:'click on inspector on the map to choose'} </>}
                <p id={'alrt'+ showRequest._id}></p>
                {showRequest.status==='Sent to the municipality'? <button onClick={()=>sendsendToInspector()}>send to inspector</button>:<></>}
                
              </>
            )}
        </Box>
  )
}
