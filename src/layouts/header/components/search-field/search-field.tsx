import { Box } from '@mui/material';
import SearchIcon from 'components/icons/search.icon';
import { Paths } from 'config/site-paths';
import { COLORS } from 'config/styles-config';
import { useRouter } from 'next/router';
import React from 'react';
import { Categories } from '../categories';
import { CustomInput, SearchFieldWrapper } from './search-field.styles';

interface IsearchField {
  isLabel?: boolean;
  isNotMobile?: boolean;
}

const SearchField: React.FC<IsearchField> = ({
  isLabel,
  isNotMobile = true,
}) => {
  const router = useRouter();
  const handleSearchFieldClick = () => {
    if (router.pathname === '/filter') return;
    router.push(Paths.FILTER);
  };
  return (
    <SearchFieldWrapper>
      {isNotMobile && <Categories isLabel={isLabel} />}
      <CustomInput
        onClick={handleSearchFieldClick}
        isNotMobile={isNotMobile}
        placeholder="Қидириш"
        sx={{ width: '100%' }}
        endAdornment={
          <Box
            sx={{
              borderLeft: `1px solid ${COLORS.border}`,
              padding: '0 1.25rem',
              display: 'flex',
              cursor: 'pointer',
              height: '3rem',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SearchIcon />
          </Box>
        }
      />
    </SearchFieldWrapper>
  );
};

export default SearchField;
