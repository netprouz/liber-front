import { Button } from 'components/button';
import { COLORS } from 'config/styles-config';
import styled from 'styled-components';

export const ControllerWrapper = styled.div`
  border-radius: 14px;
  border: 1px solid ${COLORS.borderColor};
  background-color: ${COLORS.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OpenerButton = styled(Button)`
  border-radius: 0 14px 14px 0 !important;
  background-color: transparent;
  color: ${COLORS.textMain};
  border-left: 1px solid ${COLORS.border};
  font-weight: 600;
  font-size: 1rem;
  &:hover {
    background-color: transparent;
    border-width: 1px;
  }
`;
