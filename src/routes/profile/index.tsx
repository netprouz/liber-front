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
  const isnotmobile = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box sx={{ background: '#FBFBFB' }}>
      <Container
        sx={{ padding: isnotmobile ? '1.5rem 0' : '1rem 0' }}
        maxWidth="lg"
      >
        <UserCard isnotmobile={isnotmobile} />
        <ProfileLayout {...{ activeItemId, setActiveItemId, isnotmobile }}>
          {activeItemId === 1 && <Subscription isnotmobile={isnotmobile} />}
          {activeItemId === 2 && <Wallet isnotmobile={isnotmobile} />}
          {activeItemId === 3 && <Books isnotmobile={isnotmobile} />}
          {activeItemId === 4 && <SavedBooks />}
          {activeItemId === 5 && <Settings />}
        </ProfileLayout>
      </Container>
    </Box>
  );
};

export default UserProfile;
