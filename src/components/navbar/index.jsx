import { useState } from 'react';
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Search, Notifications, Help, Menu, Close, Light } from '@mui/icons-material';
import FlexBetween from '../flexBetween';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
  const navigate=useNavigate();
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const token=localStorage.getItem('User')
  let decoded = jwt_decode(token);

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={dark}>
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color={neutralLight}
          // onClick={() => navigate('/home')}
          sx={{
            '&:hover': {
              color: neutralLight,
              cursor: 'pointer',
            },
          }}>
                  <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color={neutralLight}
          sx={{
            '&:hover': {
              color: neutralLight,
              cursor: 'pointer',
            },
          }}>
            {decoded.city}
        </Typography>
        </Typography>
        {isNonMobileScreens && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem">
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
        
      </FlexBetween>

          
      {/* DESKTOP NAV */}

      <FlexBetween gap="2rem">
        
      <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color={neutralLight}
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          sx={{
            '&:hover': {
              color: 'red',
              cursor: 'pointer',
            },
          }}>
          <i class="fa-solid fa-door-open" onClick={()=>{localStorage.removeItem('User');navigate('/')}}></i>
          <div style={{fontSize:'0.9rem'}}>log out</div>
        </Typography>
        

      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
