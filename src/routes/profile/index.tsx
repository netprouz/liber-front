import React, { useState } from 'react';
import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import { ProfileLayout } from './layout';
import UserCard from './components/user-card';
import Subscription from './tabs/subscription';
import Wallet from './tabs/wallet';
import Books from './tabs/books';
import SavedBooks from './tabs/saved-books';
import Settings from './tabs/settings';

const UserProfile = () => {
  const [activeItemId, setActiveItemId] = useState(1);
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box sx={{ background: '#FBFBFB' }}>
      <Container
        sx={{ padding: isNotMobile ? '1.5rem 0' : '1rem 0' }}
        maxWidth="lg"
      >
        <UserCard isNotMobile={isNotMobile} />
        <ProfileLayout {...{ activeItemId, setActiveItemId, isNotMobile }}>
          {activeItemId === 1 && <Subscription isNotMobile={isNotMobile} />}
          {activeItemId === 2 && <Wallet isNotMobile={isNotMobile} />}
          {activeItemId === 3 && <Books isNotMobile={isNotMobile} />}
          {activeItemId === 4 && <SavedBooks />}
          {activeItemId === 5 && <Settings />}
        </ProfileLayout>
      </Container>
    </Box>
  );
};

export default UserProfile;
