import styled from 'styled-components';

export const HeaderWrapper = styled.header<{ padding?: string }>`
  padding: ${(props) => (props.padding ? props.padding : '22px 0')};
  border-bottom: 1px solid #f0f0f0;
`;

export const HeaderContent = styled.div<{ justify?: string }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify};
`;
export const searchIconPosition = styled.div`
  text-align: right;
`;
