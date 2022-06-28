import styled from 'styled-components';

export const ProductCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem
`;

export const ProductCardImage = styled.div<{ src?: string,isNotMobile?:boolean }>`
  border: 2px solid #ffffff;
  filter: drop-shadow(0px 4px 11px rgba(0, 0, 0, 0.21));
  border-radius: 14px;
  position: relative;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  max-width: 190px;
  height:${({isNotMobile })=>isNotMobile?"267px":"190px"};
  width: 100%
`;
