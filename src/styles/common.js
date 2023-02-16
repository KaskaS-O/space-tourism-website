import styled from "styled-components";

export const StyledPageTitle = styled.h1`
  padding-bottom: var(--page-title-padding);
  font-family: var(--nav-font);
  font-size: var(--heading5);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: var(--heading5-letter-space);
  text-align: center;
  color: var(--white);
  .number {
    color: var(--darkened-white);
  }
`;

export const StyledSubtitle = styled.h3`
  margin: 8px 0 16px;
  font-family: var(--title-font);
  font-size: var(--heading3);
  font-weight: 400;
  color: var(--white);
  text-transform: uppercase;
  text-align: center;
`;

export const StyledTxt = styled.p`
  font-size: var(--body-txt);
  line-height: 1.6;
  text-align: center;
`;
