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

const Navbar = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;

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
            <img  style={{width:'150px'}} src="/assets/titel-logo-removebg-preview.png" alt="" />
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
          // onClick={() => navigate('/home')}
          sx={{
            '&:hover': {
              color: neutralLight,
              cursor: 'pointer',
            },
          }}>
              TEL AVIV
        </Typography>
        
        <FormControl variant="standard" value={'tommy'}>
          <Select
            value={'fullName'}
            sx={{
              backgroundColor: neutralLight,
              width: '150px',
              borderRadius: '0.25rem',
              p: '0.25rem 1rem',
              '& .MuiSvgIcon-root': {
                pr: '0.25rem',
                width: '3rem',
              },
              '& .MuiSelect-select:focus': {
                backgroundColor: neutralLight,
              },
            }}
            input={<InputBase />}>
            <MenuItem value={'fullName'}>
              <Typography>{'fullName'}</Typography>
            </MenuItem>
            <MenuItem onClick={() => {}}>Log Out</MenuItem>
          </Select>
        </FormControl>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
