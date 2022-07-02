import React, { useEffect, useState } from 'react';
import {
  Divider,
  ListItemIcon,
  MenuItem,
  MenuList,
  Paper,
  Switch,
  Typography,
} from '@mui/material';
import styled from 'styled-components';
import SubscriptionIcon from 'components/icons/user/subscription.icon';
import WalletIcon from 'components/icons/user/wallet.icon';
import BooksIcon from 'components/icons/user/books.icon';
import SavedIcon from 'components/icons/user/saved.icon';
import ModeIcon from 'components/icons/user/mode.icon';
import SettingsIcon from 'components/icons/user/settings.icon';

const MenuWithICon = styled.div`
  width: 100%;
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

const Menu = [
  { id: 1, name: 'Обуна бўлиш', icon: <SubscriptionIcon /> },
  { id: 2, name: 'Э-Хисоб', icon: <WalletIcon /> },
  { id: 3, name: 'Китобларим', icon: <BooksIcon /> },
  { id: 4, name: 'Сақланганлар', icon: <SavedIcon /> },
  { id: 5, name: 'Созламалар', icon: <SettingsIcon /> },
  { id: 6, name: 'Тунги режим', icon: <ModeIcon /> },
];
interface Settings {
  setActiveItemId?: any;
  activeItemId?: number;
}

const ProfileSidebarMenu: React.FC<Settings> = ({
  setActiveItemId,
  activeItemId,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (activeItemId === 6) {
      setIsChecked(!isChecked);
    }
  }, [activeItemId]);

  return (
    <Paper
      sx={(theme) => ({
        width: 300,
        [theme.breakpoints.down('md')]: {
          width: '100%',
        },
      })}
    >
      <MenuList>
        {Menu.map((item, i) => (
          <MenuItem
            key={item.toString()}
            disableGutters
            onClick={() => setActiveItemId(item.id)}
          >
            {activeItemId === item.id && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  background: '#3F51B5',
                  width: 2,
                }}
              />
            )}
            <MenuWithICon>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <Typography
                variant="inherit"
                sx={{
                  color: '#242424',
                  fontWeight: 500,
                  fontSize: 18,
                  lineHeight: '40px',
                }}
              >
                {item.name}
              </Typography>
              {item.id === 6 && (
                <Switch checked={isChecked} sx={{ marginLeft: 5 }} />
              )}
            </MenuWithICon>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
};
export default ProfileSidebarMenu;
