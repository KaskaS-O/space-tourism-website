import styled from "styled-components";
import { devices } from "./breakpoints";

export const StyledPageTitle = styled.h1`
  padding-bottom: var(--page-title-padding);
  font-family: var(--nav-font);
  font-size: var(--heading5);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: var(--heading5-letter-space);
  text-align: center;
  color: var(--white);

  @media ${devices.tabletS} {
    padding-bottom: var(--page-title-padding-tablet);
    text-align: left;
    font-size: var(--heading5-tablet);
    letter-spacing: var(--heading5-letter-space-tablet);
  }

  @media ${devices.laptopS} {
    font-size: var(--heading5-desktop);
    letter-spacing: var(--heading5-letter-space-desktop);
    padding-left: 50px;
    padding-bottom: 95px;
  }

  @media ${devices.laptopM} {
    padding-left: 110px;
  }

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

  @media ${devices.tabletS} {
    font-size: var(--heading3-tablet);
  }

  @media ${devices.laptopS} {
    font-size: var(--heading3-desktop);
    text-align: left;
  }
`;

export const StyledTxt = styled.p`
  font-size: var(--body-txt);
  line-height: 1.6;
  text-align: center;

  @media ${devices.tabletS} {
    font-size: var(--body-txt-tablet);
    line-height: 1.8;
  }

  @media ${devices.laptopS} {
    font-size: var(--body-txt-desktop);
  }
`;
