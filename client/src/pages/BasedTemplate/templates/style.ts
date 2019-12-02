import styled, { css } from 'styled-components';
import { theme } from 'styled-tools';

const commonStyle = css`
  max-width: 100%;
  padding: 0 2rem;

  ${theme('responsive.desktop')} {
    width: 100%;
    max-width: 1060px;
    margin: auto;
    padding: 0 2.4rem;
  }
`;
export const Container = styled.div``;

export const ChildrenWrapper = styled.div`
  ${commonStyle}
  padding: 0;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 6.8rem;
  ${commonStyle}
`;

export const FooterWrapper = styled.div`
  ${commonStyle}
`;
