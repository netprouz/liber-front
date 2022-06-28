import { IconButton, Stack, Typography } from '@mui/material';
import ListIcon from 'components/icons/list.icon';
import MenuIcon from 'components/icons/menu.icon';
import { COLORS } from 'config/styles-config';
import { useFilterContext } from 'context/filter';
import React from 'react';
import { ControllerWrapper } from './category-header.styles';
import Sort from './sort';

interface FilterHeaderProps {
  categoryTitle?: string;
}

const FilterHeader: React.FC<FilterHeaderProps> = ({
  categoryTitle = 'Китоблар',
}) => {
  const { grid_view, setGridView, setListView } = useFilterContext();
  return (
    <ControllerWrapper>
      <Stack
        margin="0.5rem 1.5rem"
        direction="row"
        justifyContent="space-between"
        width="100%"
        alignItems="center"
      >
        <Typography variant="subtitle1" fontWeight={600}>
          {categoryTitle}
        </Typography>
        <Stack gap="0.5rem" direction="row">
          <IconButton onClick={setListView}>
            <ListIcon color={!grid_view ? COLORS.primary : undefined} />
          </IconButton>
          <IconButton onClick={setGridView}>
            <MenuIcon color={grid_view ? COLORS.primary : undefined} />
          </IconButton>
        </Stack>
      </Stack>
      <Sort />
    </ControllerWrapper>
  );
};

export default FilterHeader;
