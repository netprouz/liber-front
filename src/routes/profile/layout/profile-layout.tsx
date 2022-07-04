import React from 'react';
import { Box } from '@mui/material';
import ProfileSidebarMenu from '../components/sidebar-menu';

interface Content {
  children?: React.ReactNode;
  activeItemId: number;
  setActiveItemId: any;
  isnotmobile: boolean;
}

const ProfileLayout: React.FC<Content> = ({
  children,
  activeItemId,
  setActiveItemId,
  isnotmobile,
}) => (
  <Box
    sx={(theme) => ({
      margin: isnotmobile ? '60px 0' : '20px 1rem',
      display: 'flex',
      alignItems: 'flex-start',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    })}
  >
    <ProfileSidebarMenu {...{ activeItemId, setActiveItemId }} />
    <Box
      sx={(theme) => ({
        paddingLeft: '36px',
        width: '100%',
        [theme.breakpoints.down('md')]: { paddingLeft: 0, marginTop: '30px' },
      })}
    >
      {children}
    </Box>
  </Box>
);
export default ProfileLayout;
