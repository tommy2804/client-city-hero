import { Box } from '@mui/material';
// import inspectorIcon from 'client/public/assets/inspectorIcon.png';
const UserImage = ({ image, size = '60px' }) => {
  return (
    <Box width={size} height={size}>
      <img
        src="/assets/inspectorIcon.png"
        alt="user"
        style={{ objectFit: 'cover', borderRadius: '50%' }}
        width={size}
        height={size}
      />
    </Box>
  );
};

export default UserImage;
