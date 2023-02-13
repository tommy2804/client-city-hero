import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Link, Box, Grid } from '@mui/material';
import { TextField, Divider, Typography, Checkbox, FormControlLabel } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useGeolocation } from '../../hooks/useGeolocation';
import Select from 'react-select';
import { login, register } from '../../api';
import { useDispatch } from 'react-redux';
import { setUser } from '../../state/slices/UserSlice';

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
  phoneNumber: '',
  gender: '',
  role: '',
  location: {
    lat: 0,
    lng: 0,
  },
};
const gender = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
];

export default function Form() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState(initialData);
  const position = useGeolocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(position);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isLogin) {
      const res = await register({
        ...formData,
        location: { lat: position?.latitude, lng: position?.longitude },
        role: 'municipality',
      });

      if (res.status === 201) {
        localStorage.setItem('User',res.data);
        // console.log(res.data);
        dispatch(setUser(res.data));
        navigate('/Main');
      } else {
        alert(res.data);
      }
    } else {
      const res = await login({
        email: formData.email,
        password: formData.password,
      });

      if (res.status === 201) {
        localStorage.setItem('User',res.data);
        dispatch(setUser(res.data));
        navigate('/Main');
      } else {
        alert(res.data);
      }
    }
  };
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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isLogin ? 'Sign in' : 'sign up'}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          {!isLogin && (
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
          )}
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
          {!isLogin && (
            <>
              <Divider />
              <Typography mt="1rem" variant="h5">
                More Details:
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs justifyContent="center" mt="2rem">
                  <Select
                    defaultValue={formData.gender}
                    onChange={(ev) => setFormData({ ...formData, gender: ev.value })}
                    options={gender}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    fullWidth
                    margin="normal"
                    name="phoneNumber"
                    label="Phone Number"
                    autoComplete="phoneNumber"
                    onChange={(ev) => setFormData({ ...formData, phoneNumber: ev.target.value })}
                  />
                </Grid>
              </Grid>
            </>
          )}

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign {isLogin ? 'In' : 'Up'}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Button onClick={() => setIsLogin(!isLogin)} variant="body2">
                {`${isLogin ? '' : 'Dont'} have an account? Sign ${isLogin ? 'In' : 'Up'} `}
              </Button>
            </Grid>
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Box>
    </>
  );
}
