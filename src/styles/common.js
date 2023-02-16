import styled from "styled-components";

export const StyledPageTitle = styled.h1`
  font-family: var(--nav-font);
  font-size: var(--heading5);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: var(--heading5-letter-space);
  text-align: center;
  color: var(--white);
  .number {
    filter: brightness(25%);
  }
`;

export const StyledSubtitle = styled.h3``;

export const StyledTxt = styled.p`
  font-size: var(--body-txt);
  line-height: 1.6;
  text-align: center;
`;
