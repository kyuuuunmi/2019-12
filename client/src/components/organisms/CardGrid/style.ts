import styled from 'styled-components';
import { theme } from 'styled-tools';

export const CardGridContainer = styled.div`
  display: grid;
  justify-content: space-between;
  column-gap: 1%;
  row-gap: 2rem;

  ${theme('responsive.tablet')} {
    grid-template-columns: repeat(2, 49%);
    column-gap: 1%;
    row-gap: 2rem;
  }

  ${theme('responsive.desktop')} {
    grid-template-columns: repeat(4, 24%);
    column-gap: 1%;
  }
`;
