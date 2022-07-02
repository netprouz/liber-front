import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import {
  AudioIcon,
  BookIcon,
  HomeIcon,
  OrderIcon,
  ProfileIcon,
} from 'components/icons/bottomNav';

export const BottomMenu = () => {
  const [value, setValue] = React.useState(2);
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
        position: 'fixed',
        bottom: 0,
        right: 0,
        zIndex: 9999,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          '.MuiBottomNavigationAction-label': {
            color: '#242424',
            fontWeight: 'bold',
            '&:focus': {
              color: '#425bfb!important',
            },
          },
        }}
      >
        <BottomNavigationAction
          label="Аудио"
          icon={<AudioIcon color={value === 0 ? '#3F51B5' : '#242424'} />}
        />
        <BottomNavigationAction
          label="Э-китоб"
          icon={<BookIcon color={value === 1 ? '#3F51B5' : '#242424'} />}
        />
        <BottomNavigationAction
          label="Асосий"
          icon={<HomeIcon color={value === 2 ? '#3F51B5' : '#242424'} />}
        />
        <BottomNavigationAction
          label="Буюртмалар"
          icon={<OrderIcon color={value === 3 ? '#3F51B5' : '#242424'} />}
        />
        <BottomNavigationAction
          label="Профиль"
          icon={<ProfileIcon color={value === 4 ? '#3F51B5' : '#242424'} />}
        />
      </BottomNavigation>
    </Box>
  );
};
