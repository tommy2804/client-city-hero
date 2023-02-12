import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Link, Box, Grid } from '@mui/material';
import { TextField, Divider, Typography, Checkbox, FormControlLabel } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useGeolocation } from '../../hooks/useGeolocation';
import Select from 'react-select';
import { login, register } from '../../api';
import { useDispatch } from 'react-redux';
import { setUser } from '../../state/slices/UserSlice';
import { MyContext } from '../../context/context';
import axios from 'axios';
import { CleaningServices } from '@mui/icons-material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">Your Website</Link> {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const initialData = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  endPhoneNumber: '',
  gender: '',
  role: '',
  location: {
    lat: 0,
    lng: 0,
  },
  startPhoneNumber:''
  
};
const startPhoneNumber = [
  { value: '054', label: '054' },
  { value: '053', label: '053' },
  { value: '052', label: '052' },
  { value: '050', label: '050' },
  { value: '03', label: '03' },
  { value: '077', label: '077' },
  { value: '076', label: '076' },
  { value: '075', label: '075' },
  { value: '074', label: '074' },
  { value: '073', label: '073' },
];

export default function AddInspectorForm({setShowAlrt}) {
  const [formData, setFormData] = useState(initialData);
  // const {addInspector}= useContext(MyContext)
  async function addInspector(formData) {
    try{
      await axios.post('http://localhost:4001/auth/register',{...formData,role:'inspector'});
      document.getElementById('sendInspectorBTN').innerHTML='&#10004'
      document.getElementById('sendInspectorBTN').style.color='green'
      setShowAlrt(true);
      setFormData(initialData);
    }catch{
      document.getElementById('sendInspectorBTN').innerHTML='somting not good , try again'
      document.getElementById('sendInspectorBTN').style.color='red'
    }

} 
  return (
    <>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Inspector
        </Typography>
        <Box component="form"  sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs>
                <TextField
                  fullWidth
                  margin="normal"
                  required
                  label="First Name"
                  name="firstName"
                  onChange={(ev) => setFormData({ ...formData, firstName: ev.target.value })}
                />
              </Grid>
              <Grid item xs>
                <TextField
                  fullWidth
                  margin="normal"
                  required
                  name="lastName"
                  label="Last Name"
                  autoComplete="lastName"
                  onChange={(ev) => setFormData({ ...formData, lastName: ev.target.value })}
                />
              </Grid>
            </Grid>
          
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={(ev) => setFormData({ ...formData, email: ev.target.value })}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            onChange={(ev) => setFormData({ ...formData, password: ev.target.value })}
          />
            <>
              <Divider />
              <Grid container spacing={2}>
                <Grid item xs justifyContent="center" mt="2rem">
                  <Select
                    defaultValue={formData.startPhoneNumber}
                    onChange={(ev) => setFormData({ ...formData, startPhoneNumber: ev.value })}
                    options={startPhoneNumber}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    fullWidth
                    margin="normal"
                    name="phoneNumber"
                    label="Phone Number"
                    autoComplete="phoneNumber"
                    onChange={(ev) => setFormData({ ...formData, endPhoneNumber: ev.target.value })}
                  />
                </Grid>
              </Grid>
            </>
          

          
          <Button id='sendInspectorBTN' type="submit" fullWidth onClick={(e)=>{e.preventDefault();addInspector({...formData, phoneNumber:formData.startPhoneNumber+'-'+formData.endPhoneNumber})}} variant="contained" sx={{ mt: 3, mb: 2 }}>
            send
          </Button>
          
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Box>
    </>
  );
}
