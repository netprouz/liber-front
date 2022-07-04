import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';
import { TabBox } from '../tabs/styles/books.style';
import { Title } from '../tabs/styles/tabs-title.style';

interface tabsProps {
  value?: string;
  handleChange?: (event: React.SyntheticEvent, newValue: string) => void;
  isnotmobile: boolean;
}
const BookTabs: React.FC<tabsProps> = ({
  value,
  handleChange,
  isnotmobile,
}) => (
  <TabBox isnotmobile={isnotmobile}>
    <Title isnotmobile={isnotmobile}>Китобларим</Title>
    <Tabs
      value={value}
      onChange={handleChange}
      textColor="primary"
      indicatorColor="primary"
      variant="scrollable"
      aria-label="scrollable force tabs example"
      sx={{
        marginLeft: isnotmobile ? '80px' : '0',
        height: 'max-content',
        '.MuiTab-root': {
          color: '#242424',
          fontSize: '16px',
          fontWeight: 900,
          textTransform: 'none',
          '&:focus': {
            color: '#3F51B5',
          },
        },
      }}
    >
      <Tab value="one" label="Аудиокитоб" />
      <Tab value="two" label="Электрон китоб" />
      <Tab value="three" label="Босма китоб" />
    </Tabs>
  </TabBox>
);
export default BookTabs;
