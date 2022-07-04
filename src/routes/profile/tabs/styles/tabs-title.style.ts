import styled from 'styled-components';

export const Title = styled.h3<{ isnotmobile?: boolean }>`
  font-weight: 700;
  font-size: ${(props) => (props.isnotmobile ? '30px' : '20px')};
  line-height: 40px;
  color: #11142d;
`;
