import { COLORS } from 'config/styles-config';
import styled from 'styled-components';
import Hero from 'assets/png/hero.png';

export const HeroWrapper = styled.div<{ isnotmobile?: boolean }>`
  padding: ${(props) =>
    props.isnotmobile ? '32px 24px 16px 32px' : '32px 0px 16px 0px'};
  background-color: ${(props) => (props.isnotmobile ? COLORS.lightBg : '#fff')};
  background-image: url(${(props) => (props.isnotmobile ? Hero.src : '')});
  background-repeat: no-repeat;
  background-position: left bottom;
  border-radius: 12px;
`;
