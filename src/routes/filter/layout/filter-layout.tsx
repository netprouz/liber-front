import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Slider,
  Stack,
  Typography,
} from '@mui/material';
import { CustomAccordion } from 'components/accordion';
import { Button } from 'components/button';
import WithCustomScrollBar from 'components/custom-scroll-bar';
import { COLORS } from 'config/styles-config';
import React from 'react';
import { CheckboxesGroup } from '../components/checkbox-group';
import FilterHeader from '../components/filter-header/filter-header';
import { FilterWrapper } from './filter-layout.styles';

function valuetext(value: number) {
  return `${value}°C`;
}

const minDistance = 10;

const FilterLayout: React.FC = ({ children }) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const [value2, setValue2] = React.useState<number[]>([20, 37]);

  const handleChange2 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue as number[]);
    }
  };

  return (
    <Grid container columnSpacing={2}>
      <Grid item xs={3}>
        <Stack gap="1rem">
          <FilterWrapper>
            <Typography fontWeight={600} variant="subtitle1">
              Рукнлар
            </Typography>
            <WithCustomScrollBar>
              <Box sx={{ maxHeight: '320px' }}>
                <CheckboxesGroup />
              </Box>
            </WithCustomScrollBar>
          </FilterWrapper>
          <CustomAccordion
            summary={
              <Typography variant="subtitle1" fontWeight={600}>
                Йил бўйича
              </Typography>
            }
            details={
              <FormControl sx={{ minWidth: '100%' }}>
                <Select
                  sx={{
                    borderRadius: '4px',
                    '.MuiOutlinedInput-input': {
                      padding: '1rem',
                    },
                  }}
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            }
          />
          <CustomAccordion
            summary={
              <Typography variant="subtitle1" fontWeight={600}>
                Китоб турлари
              </Typography>
            }
            details={<CheckboxesGroup />}
          />
          <CustomAccordion
            summary={
              <Typography variant="subtitle1" fontWeight={600}>
                Нархлари
              </Typography>
            }
            details={
              <Slider
                getAriaLabel={() => 'Minimum distance shift'}
                value={value2}
                onChange={handleChange2}
                valueLabelDisplay="on"
                getAriaValueText={valuetext}
                disableSwap
                sx={{
                  marginBottom: "2rem",
                  '.MuiSlider-valueLabel': {
                    transform: 'translateY(150%) scale(1) !important',
                    borderRadius: .5,
                    backgroundColor: COLORS.lightBg,
                    padding: "6px 18px",
                    color: COLORS.primary,
                    '&::before': {
                      backgroundColor: COLORS.lightBg,
                      transform: 'translate(-50%, -320%) rotate(45deg)',
                    },
                  },
                }}
                // eslint-disable-next-line react/no-unstable-nested-components
                valueLabelFormat={(value) => <div>${value}</div>}
              />
            }
          />
          <Button variant="contained" size="large" disabled>
            Тозалаш
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={9}>
        <Stack gap="1rem">
          <FilterHeader />
          {children}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default FilterLayout;
