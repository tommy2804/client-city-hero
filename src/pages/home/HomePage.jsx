import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import MapsWidget from './MapsWidget';

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');
  return (
    <Box
      width="100%"
      padding="2rem 0"
      display={isNonMobileScreens ? 'flex' : 'block'}
      gap="0.5rem"
      justifyContent="space-between">
      {isNonMobileScreens && (
        <Box flexBasis="15%" height="">
          <Box m="2rem 0">sidebar</Box>
        </Box>
      )}

      <Box
        width={isNonMobileScreens ? '50%' : undefined}
        padding={isNonMobileScreens ? '0 1rem' : 0}
        flexBasis={isNonMobileScreens ? '35%' : undefined}
        mt={isNonMobileScreens ? undefined : '2rem'}>
        allRequests
      </Box>
      <Box
        flexBasis={isNonMobileScreens ? '45%' : undefined}
        padding={isNonMobileScreens ? undefined : '2rem'}
        m="0 0.7rem">
        <MapsWidget />
      </Box>
    </Box>
  );
};

export default HomePage;
