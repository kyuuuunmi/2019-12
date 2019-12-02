import styled from 'styled-components';
import { theme } from 'styled-tools';

export const Container = styled.div`
  width: 100%;
  height: 28rem;

  ${theme('responsive.desktop')} {
    height: 40rem;
  }
`;
