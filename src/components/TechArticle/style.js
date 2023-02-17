import styled from "styled-components";
import { devices } from "../../styles/breakpoints";
import { StyledTxt } from "../../styles/common";

export const StyledImgContainer = styled.div`
  position: relative;

  height: 170px;
  width: 100%;

  @media ${devices.tabletS} {
    height: 310px;
  }

  img {
    position: absolute;
    z-index: 0;
    left: calc(-1 * var(--outer-padding));
    top: 0;
    height: 100%;
    width: 100vw;

    @media ${devices.tabletS} {
      left: calc(-1 * var(--outer-padding-tablet-sides));
    }
  }
`;

export const StyledTitle = styled.h2`
  font-family: var(--nav-font);
  font-size: var(--subheading2);
  letter-spacing: var(--subheading2-letter-space);
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;

  @media ${devices.tabletS} {
    font-size: var(--subheading2-tablet);
    margin-bottom: 8px;
  }
`;

export const StyledTechTxt = styled(StyledTxt)`
  @media ${devices.tabletS} {
    width: 450px;
    margin: 0 auto;
  }
`;
