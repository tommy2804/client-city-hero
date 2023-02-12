import { ChatBubbleOutlineOutlined, ShareOutlined, Send } from '@mui/icons-material';
import { IconButton, Typography, useTheme, Box, Paper } from '@mui/material';
import WidgetWrapper from '../../../components/WidgetWraper';
import moment from 'moment';
import FlexBetween from '../../../components/flexBetween';
import CustomImage from '../../../components/custom/customImage';
import { useContext } from 'react';
import { MyContext } from '../../../context/context';

const ReportWidget = ({ report }) => {
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const {setShowRequest,setOpen} = useContext (MyContext);
  return (<>
    <WidgetWrapper sx={{ border:'2px solid black', backgroundColor: 'white' , marginBottom:'5px', width:'97%'}}>
      <Box padding="0.5rem">
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          Report Number : {report?.reqNumber}
        </Typography>
      </Box>
      <Paper sx={{ backgroundColor: '#EAEBEB' }}>
        {/* <Typography color="GrayText" >{moment(report?.createdAt).fromNow()}</Typography> */}
        <Box sx={{ padding: '0rem 0.5rem' }}>
          <Typography variant="h4" sx={{ mt: '1rem' }}>
            {report?.reqTitle}
          </Typography>
        </Box>
        <CustomImage image={report?.reqPhoto} width="300px"  />

        <FlexBetween gap="0.3rem"></FlexBetween>
        <FlexBetween gap="0.3rem">
          <Typography color={main} sx={{ mt: '1rem' }}>
            <Box display="flex" flexDirection="column">
              <Typography>status: {report?.status}</Typography>
            </Box>
          </Typography>
        </FlexBetween>
        {/* <Typography variant="h5" sx={{ mt: '1rem' }}>
          description: {report?.reqDescription}
        </Typography> */}
        <FlexBetween mt="0.25rem">
          <FlexBetween gap="1rem">
            <FlexBetween gap="0.3rem"></FlexBetween>

            <FlexBetween gap="0.3rem">
              <Typography>
                <i style={report.urgency? report.urgency>7? {color:'red'}:report.urgency>4? {color:'blue'}:{color:'green'}:{color:'black'}} class="fa-solid fa-scale-unbalanced-flip"></i>
                {report.urgency? report.urgency:'?'}
              </Typography>
            </FlexBetween>
            <FlexBetween gap="0.3rem">
            </FlexBetween>
            <Typography>
              Tel Aviv, {report?.reqStreet}, {report?.reStreetNum}{' '}
            </Typography>
          </FlexBetween>
              <IconButton onClick={()=>{setShowRequest({...report});setOpen(true)}}>
                <Send />
              </IconButton>
        </FlexBetween>
      </Paper>
    </WidgetWrapper>
    </>);
};

export default ReportWidget;
