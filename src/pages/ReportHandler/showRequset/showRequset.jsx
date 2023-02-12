import React, { useContext, useState } from 'react'
import { Box, Button, Modal, Typography } from '@mui/material';
import { MyContext } from '../../../context/context';
import MapsWidget from '../MapsWidget';
import './showRequset.css'

export default function ShowRequset() {
  const {inspectors, showRequest,sendToInspector,setShowRequestUrgency,setShowRequestInspector,showRequestInspector,open,setOpen} = useContext (MyContext);
 return (
        <div className='myModal'>
        {showRequest && (
          <>
          <Modal
          open={open}
          onClose={()=>{setOpen(false);setShowRequestUrgency(null);setShowRequestInspector(null);}}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
        <Box 
        sx={{
          width:'60%',
          height:'80%',
          display:'flex',
          flexDirection:'column',
          textAlign:'center',
          border:'2px solid black',
          backgroundColor: '#e9ecef',
          marginLeft:'20%',
          marginTop:'5%',
          overflow: "hidden",
          overflowY: "scroll",
          borderRadius:"1%",
        }
        }  
          >

          <Typography  variant="h4" component="h2" sx={{ mt: 3 }}>
            {showRequest.reqTitle}  #{showRequest.reqNumber}          
          </Typography>

          <Typography  sx={{ mt: 3 ,display:'flex'  ,width:'90%' , marginLeft:'5%' ,gap:'10%'}}>

            <Typography sx={{ mt: 3 ,display:'flex'  ,flex:'2', flexDirection:'column', justifyContent:'center'}}>

              <Typography  sx={{ mt: 3 ,display:'flex' , justifyContent:'space-between'}}>
                <Typography sx={{fontSize:'1rem',  mt: 3 ,display:'flex' , flexDirection:'column'}}>
                  <i class="fa-solid fa-calendar-days"></i> 
                  <div>{showRequest.createdAt?showRequest.createdAt.substr(0, 10):'not known'}</div>
                </Typography>
                <Typography sx={{fontSize:'1rem',  mt: 3 ,display:'flex' , flexDirection:'column'}}>
                  <i class="fa-solid fa-clock"></i>
                  <div>{showRequest.createdAt?showRequest.createdAt.substr(11,5):'not known'}</div>
                </Typography>
                <Typography sx={{fontSize:'1rem',  mt: 3 ,display:'flex' , flexDirection:'column'}}>
                  <i class="fa-sharp fa-solid fa-road"></i>
                  <div>{showRequest.reqStreet},{showRequest.reStreetNum}</div> 
                </Typography>
              </Typography>

              <Typography sx={{fontSize:'1rem',  mt: 3}}>
              <i class="fa-sharp fa-solid fa-file-signature"></i>
              <div>{showRequest.reqDescription}</div> 
              </Typography>

              <Typography  sx={{ mt: 3 ,display:'flex' , justifyContent:'center', gap:'10%'}}>
                <Typography  sx={{fontSize:'1rem', mt: 3}}>
                  <i class="fa-solid fa-scale-unbalanced-flip"></i>
                  <div>{showRequest.urgency?<p>{showRequest.urgency} </p>: <input type="text" onChange={(e)=>setShowRequestUrgency(e.target.value)} />}</div>          
                </Typography>
                <Typography  sx={{fontSize:'1rem', mt: 3}}>
                  <i class="fa-solid fa-shield"></i>
                  <div>{showRequest.inCharge?<p>{inspectors.filter(inspector=> inspector._id ==showRequest.inCharge)[0].firstName} </p>: <>{showRequestInspector? showRequestInspector.firstName:'click on inspector on the map to choose'} </>}</div>   
                </Typography>
              </Typography>
              
            </Typography>

            {
              showRequest.reqPhoto ?
                <Typography sx={{ mt: 3 ,display:'flex', flex:'1'}}>
                  <img src={showRequest.reqPhoto} alt="No pic was add" style={{width:'300px',height:'300px'}} />
                </Typography>
                :
                <Typography variant="h3" sx={{ mt: 3 ,display:'flex', flex:'1', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                  no pic
                  <i class="fa-sharp fa-regular fa-image"></i>
                </Typography>
              
            }

          </Typography>

          <Typography  sx={{ mt: 3 ,display:'flex'  ,width:'90%' , marginLeft:'5%' ,gap:'10%'}}>
            
            <Typography  sx={{mt: 3 ,width:'100%',height:'400px' ,overflowY:'hidden'}}>
              <MapsWidget inspectors={inspectors} requests={[showRequest]} center={showRequest.location }/>
            </Typography>

          </Typography>

          <Typography  sx={{mt: 3}}>
            <p id={'alrt'+ showRequest._id}></p>
          </Typography>
          <Typography  sx={{mb: 2}}>
            {showRequest.status==='Sent to the municipality'?
            <div className='modalBTN'>
             <button id='sendToInspectorBTN' onClick={()=>sendToInspector()}>
                send to inspector
                <div class="arrow-wrapper">
                  <div class="arrow"></div>
                </div>
            </button>
            </div>
            :
             <></>}       
          </Typography>



        </Box>
      </Modal>
      </>
        )}
      </div>
  )
}
