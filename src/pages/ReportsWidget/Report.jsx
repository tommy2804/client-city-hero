import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
  Send,
} from '@mui/icons-material';
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
    <WidgetWrapper m="2rem 0">
      Report Number : {report.reqNumber}
      <Paper sx={{ padding: '1rem 2rem' }}>
        <Typography color={main} sx={{ mt: '1rem' }}>
          <span>title: </span>
          {report.reqTitle}
        </Typography>
        <CustomImage image={report?.reqPhoto} width="100%" size="100%" />

        <FlexBetween gap="0.3rem">
          <Typography color={main} sx={{ mt: '1rem' }}>
            description: {report.reqDescription}
          </Typography>
        </FlexBetween>
        <FlexBetween gap="0.3rem">
          <Typography color={main} sx={{ mt: '1rem' }}>
            <Box display="flex" flexDirection="column">
              <Typography>City: Tel Aviv</Typography>
              <Typography>street: {report?.reqStreet}</Typography>
              <Typography>number: {report?.reStreetNum}</Typography>
              <Typography>status: {report?.status}</Typography>
            </Box>
          </Typography>
        </FlexBetween>
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
