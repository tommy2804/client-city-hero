import React, { useContext, useState } from 'react'
import { Box, Button, Modal, Typography } from '@mui/material';
import MapsWidget from '../ReportHandler/MapsWidget';

export default function InspectorMap({openMap,setOpenMap,requests,center,inspectors}) {

 return (
          <>
          <Modal
          open={openMap}
          onClose={()=>setOpenMap(false)}

          >
        <Box 
        sx={{
          width:'60%',
          height:'80%',
          display:'flex',
          flexDirection:'column',
          textAlign:'center',
          border:'2px solid black',
          backgroundColor: 'primary.light',
          marginLeft:'20%',
          marginTop:'5%',
          borderRadius:"1%",
          overflow:'hidden'
        }
        }  
          >
            <Typography>
              <MapsWidget inspectors={inspectors} requests={requests} center={center} />
            </Typography>
        </Box>
      </Modal>
      </>
  )
}
