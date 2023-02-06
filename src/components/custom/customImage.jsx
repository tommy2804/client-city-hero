import { Box, Typography } from '@mui/material';
const CustomImage = ({ image, width, size = '' }) => {
  return (
    <Box width={width} height={image ? '30vh' : '4vh'} position="relative">
      {image ? (
        <img
          src={image}
          alt="Report"
          style={{ objectFit: 'fill', borderRadius: '1%' }}
          width={width}
          height="100%"
        />
      ) : (
        <Box position="absolute" top="0" right="0">
          <Typography>No photo has sent</Typography>
        </Box>
      )}
    </Box>
  );
};

export default CustomImage;
