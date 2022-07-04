import { Input } from 'components/input';
import { COLORS } from 'config/styles-config';
import styled from 'styled-components';

export const SearchFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const CustomInput = styled(Input)`
  border-radius: ${(props) =>
    props.isnotmobile ? '0px 14px 14px 0px' : '14px'} !important;
  background-color: ${(props) =>
    props.isnotmobile ? COLORS.inputBackground : '#fff'} !important;
  width: ${(props) => (props.isnotmobile ? '30rem' : '100%')};
  @media screen and (max-width: 1150px) {
    width: 100%;
  }
  &&&& > .MuiInputBase-input {
    background-color: ${(props) =>
      props.isnotmobile ? COLORS.inputBackground : '#fff'} !important;
  }
  &&&& > .MuiOutlinedInput-notchedOutline {
    border-color: ${COLORS.border};
  }
`;
