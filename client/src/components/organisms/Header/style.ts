// example
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { Link } from 'react-router-dom';
import Btn from '../../atoms/Btn';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Img = styled.img`
  height: 2.5rem;

  ${theme('responsive.desktop')} {
    height: 3.5rem;
  }
`;

export const StyledLink = styled(Link)``;

export const LeftNavBtn = styled(Btn)`
  display: none;

  ${theme('responsive.desktop')} {
    display: inherit;
    padding-left: 0;
  }
`;

export const RightNavBtn = styled(Btn)``;
