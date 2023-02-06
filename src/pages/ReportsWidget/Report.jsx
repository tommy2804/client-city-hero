import { ChatBubbleOutlineOutlined, ShareOutlined, Send } from '@mui/icons-material';
import { IconButton, Typography, useTheme, Box, Paper } from '@mui/material';
import WidgetWrapper from '../../components/WidgetWraper';
import { useState } from 'react';
import moment from 'moment';
import FlexBetween from '../../components/flexBetween';
import CustomImage from '../../components/custom/customImage';

const ReportWidget = ({ report, description }) => {
  const { palette } = useTheme();
  const main = palette.neutral.main;

  return (
    <WidgetWrapper sx={{ backgroundColor: 'inherit' }}>
      <Box padding="0.5rem">
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          Report Number : {report?.reqNumber}
        </Typography>
      </Box>
      <Paper sx={{ backgroundColor: '#EAEBEB' }}>
        <Typography color="GrayText">{moment(report?.createdAt).fromNow()}</Typography>
        <Box sx={{ padding: '0rem 0.5rem' }}>
          <Typography variant="h4" sx={{ mt: '1rem' }}>
            {report?.reqTitle}
          </Typography>
        </Box>
        <CustomImage image={report?.reqPhoto} width="100%" size="100%" />

        <FlexBetween gap="0.3rem"></FlexBetween>
        <FlexBetween gap="0.3rem">
          <Typography color={main} sx={{ mt: '1rem' }}>
            <Box display="flex" flexDirection="column">
              <Typography>status: {report?.status}</Typography>
            </Box>
          </Typography>
        </FlexBetween>
        <Typography variant="h5" sx={{ mt: '1rem' }}>
          description: {report?.reqDescription}
        </Typography>
        <FlexBetween mt="0.25rem">
          <FlexBetween gap="1rem">
            <FlexBetween gap="0.3rem"></FlexBetween>

            <FlexBetween gap="0.3rem">
              <IconButton>
                <ChatBubbleOutlineOutlined />
              </IconButton>
            </FlexBetween>

            <FlexBetween gap="0.3rem">
              <IconButton>
                <Send />
              </IconButton>
            </FlexBetween>
            <Typography>
              Tel Aviv, {report?.reqStreet}, {report?.reStreetNum}{' '}
            </Typography>
          </FlexBetween>
          <IconButton>
            <ShareOutlined />
          </IconButton>
        </FlexBetween>
      </Paper>
    </WidgetWrapper>
  );
};

export default ReportWidget;
