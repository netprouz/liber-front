import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';
import { TabBox } from '../tabs/styles/books.style';
import { Title } from '../tabs/styles/tabs-title.style';

interface tabsProps {
    value?: string;
    handleChange?: (event: React.SyntheticEvent, newValue: string) => void;
}
const BookTabs: React.FC<tabsProps> = ({ value, handleChange }) => {
    return (<TabBox>
        <Title>Китобларим</Title>
        <Tabs value={value} onChange={handleChange} textColor="primary" indicatorColor="primary" aria-label="secondary tabs example" sx={{
            marginLeft: "80px",
            height: "max-content",
            '.MuiTab-root': {
                color: "#242424",
                fontSize: "16px",
                fontWeight: 900,
                textTransform: "none",
                '&:focus': {
                    color: '#3F51B5'
                }
            }
        }}>
            <Tab value="one" label="Аудиокитоб" />
            <Tab value="two" label="Электрон китоб" />
            <Tab value="three" label="Босма китоб" />
        </Tabs>
    </TabBox>);
}
export default BookTabs