import styled from "styled-components";
import { devices } from "../../styles/breakpoints";
import { StyledTxt } from "../../styles/common";

export const StyledImgContainer = styled.div`
  height: 170px;
  width: 170px;
  margin: 0 auto;

  @media ${devices.tabletS} {
    height: 300px;
    width: 300px;
  }

  img {
    height: 100%;
    width: 100%;
  }
`;

export const StyledTitle = styled.h2`
  font-family: var(--title-font);
  font-size: var(--heading2);
  font-weight: 400;
  text-transform: uppercase;
  color: var(--white);
  text-align: center;

  @media ${devices.tabletS} {
    font-size: var(--heading2-tablet);
  }
`;

export const StyledDestTxt = styled(StyledTxt)`
  width: 83%;
  margin: 0 auto;
`;

export const StyledDetails = styled.section`
  text-align: center;
  &:before {
    content: "";
    display: block;
    height: 1px;
    margin: 32px 0;
    background-color: var(--darkened-white);

    @media ${devices.tabletS} {
      grid-area: 1/1/2/3;
      width: 100%;
      margin-top: 48px;
    }
  }

  @media ${devices.tabletS} {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto 1fr;
    width: 83%;
    margin: 0 auto;
  }
`;

export const StyledInfoContainer = styled.div`
  &:nth-of-type(1) {
    padding-bottom: 32px;
  }
`;

export const StyledSubtitle = styled.h3`
  padding-bottom: 12px;
  font-family: var(--nav-font);
  font-size: var(--subheading2);
  text-transform: uppercase;
  letter-spacing: var(--subheading2-letter-space);
  font-weight: 400;
`;

export const StyledInfoTxt = styled.p`
  font-family: var(--title-font);
  font-size: var(--subheading1);
  text-transform: uppercase;
  color: var(--white);
`;
