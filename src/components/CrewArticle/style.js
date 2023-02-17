import styled from "styled-components";
import { devices } from "../../styles/breakpoints";
import { StyledTxt } from "../../styles/common";

export const StyledImgContainer = styled.div`
  /* position: relative; */
  height: 220px;
  width: 100%;
  border-bottom: 1px solid var(--darkened-white);

  @media ${devices.tabletS} {
    grid-area: 5/1/6/2;
    height: 500px;
    border-bottom: none;
  }

  img {
    display: block;
    height: 100%;
    width: auto;
    margin: 0 auto;

    @media ${devices.tabletS} {
      position: absolute;
      height: 532px;
      bottom: -46px;
      left: 50%;
      transform: translateX(-50%);
    }

    @media (min-height: 1040px) {
      height: 600px;
    }
  }
`;

export const StyledTitle = styled.h2`
  font-family: var(--title-font);
  font-size: var(--heading4);
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  color: var(--semi-darkened-white);

  @media ${devices.tabletS} {
    font-size: var(--heading4-tablet);
  }
`;

export const StyledCrewTxt = styled(StyledTxt)`
  @media ${devices.tabletS} {
    margin: 0 auto 4px;
    height: 84px;
  }
`;
