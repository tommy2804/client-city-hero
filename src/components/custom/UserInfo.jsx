import { Avatar, Typography, Box } from '@mui/material';

const UserInfo = ({ size = '60px', image }) => {
  const local=localStorage.getItem("User")

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Box width={size} height={size}>
        {image ? (
          <img
            src={image}
            alt="Report"
            style={{ objectFit: 'fill', borderRadius: '50%' }}
            width={size}
            height={size}
          />
        ) : (
          <Avatar />
        )}
      </Box>
      <Typography variant="h6">{'55' || 'Current User'}</Typography>

      <Typography variant="body2"></Typography>
    </Box>
  );
};

export default UserInfo;
