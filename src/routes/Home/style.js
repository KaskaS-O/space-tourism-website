import styled from "styled-components";

import BgMobile from "../../assets/home/background-home-mobile.jpg";
import BgTablet from "../../assets/home/background-home-tablet.jpg";
import BgDesktop from "../../assets/home/background-home-desktop.jpg";

import { devices } from "../../styles/breakpoints";
import { StyledTxt } from "../../styles/common";

const bg =
  window.innerWidth <= 375 && window.innerHeight <= 667
    ? BgMobile
    : window.innerWidth <= 1024
    ? BgTablet
    : BgDesktop;

export const StyledContent = styled.main`
  background-image: url(${bg});
`;

export const StyledMainTitle = styled.h1`
  padding-top: 24px;
  font-size: var(--heading5);
  letter-spacing: var(--heading5-letter-space);
  text-transform: uppercase;
  font-family: var(--nav-font);
  font-weight: 400;
  text-align: center;

  @media ${devices.tabletS} {
    margin: 0 auto;
    padding-top: 64px;
    font-size: var(--heading5-tablet);
    letter-spacing: var(--heading5-letter-space-tablet);
  }

  strong {
    display: block;
    padding: var(--main-title-padding) 0;
    font-size: var(--heading1);
    font-family: var(--title-font);
    font-weight: 400;
    line-height: 100px;
    color: var(--white);

    @media ${devices.tabletS} {
      font-size: var(--heading1-tablet);
      line-height: 1;
      padding: var(--main-title-padding-tablet);
      letter-spacing: 0;
    }
  }
`;

export const StyledMainTxt = styled(StyledTxt)`
  @media ${devices.tabletS} {
    width: 450px;
    margin: 0 auto;
  }
`;

export const StyledMainBtn = styled.button`
  display: block;
  margin: 85px auto 0;
  background-color: var(--white);
  height: var(--btn);
  width: var(--btn);
  border: none;
  border-radius: 50%;
  font-family: var(--title-font);
  font-size: var(--btn-txt);
  letter-spacing: var(--btn-letter-space);
  text-transform: uppercase;

  @media ${devices.tabletS} {
    height: var(--btn-tablet);
    width: var(--btn-tablet);
    font-size: var(--btn-txt-tablet);
    margin-top: 140px;
  }
`;
