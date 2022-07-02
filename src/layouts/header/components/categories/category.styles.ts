import { Button } from 'components/button';
import { COLORS } from 'config/styles-config';
import styled from 'styled-components';

export const OpenerButton = styled(Button)`
  border-radius: ${(props) =>
    props.ismobile ? '14px!important' : '14px 0 0 14px!important'};
  background-color: transparent;
  color: ${COLORS.primary};
  border: ${(props) =>
    props.ismobile ? 'none' : `1px solid ${COLORS.border}`};
  font-weight: 600;
  font-size: ${(props) => (props.ismobile ? '1.2rem' : '1rem')};
  &:hover {
    background-color: transparent;
    border-width: 1px;
  }
  '.muibutton-sizemedium': {
    padding: 0 !important;
  }
`;
