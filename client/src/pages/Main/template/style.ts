import styled from 'styled-components';
import { theme } from 'styled-tools';

export const MainBannerContainer = styled.div`
  width: 100%;
  height: 25rem;

  ${theme('responsive.desktop')} {
    height: 40rem;
  }
`;

export const EventCardGridContainer = styled.div`
  margin: 4rem 0;
  padding: 0 2.4rem;

  ${theme('responsive.desktop')} {
    padding: 0;
  }
`;
