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

  @media ${devices.laptopS} {
    grid-area: 1/3/4/4;
    width: 515px;
    height: 527px;
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

    @media ${devices.laptopS} {
      width: auto;
      top: calc(303px / 2);
      transform: translateY(-50%);
      left: var(--outer-padding-desktop-sides);
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

  @media ${devices.laptopS} {
    text-align: left;
  }
`;

export const StyledTechTxt = styled(StyledTxt)`
  @media ${devices.tabletS} {
    width: 450px;
    margin: 0 auto;
  }

  @media ${devices.laptopS} {
    width: 400px;
    margin: 0;
    text-align: left;
  }

  @media ${devices.laptopM} {
    width: 450px;
  }
`;
