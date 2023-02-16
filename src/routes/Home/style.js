import styled from "styled-components";

import BgMobile from "../../assets/home/background-home-mobile.jpg";
import BgTablet from "../../assets/home/background-home-tablet.jpg";
import BgDesktop from "../../assets/home/background-home-desktop.jpg";

import { devices } from "../../styles/breakpoints";

const bg =
  window.innerWidth < 768
    ? BgMobile
    : window.innerWidth < 1200
    ? BgTablet
    : BgDesktop;

export const StyledContent = styled.main`
  background-image: url(${bg});
`;

export const StyledMainTitle = styled.h1`
  padding-top: 14px;
  font-size: var(--heading5);
  letter-spacing: var(--heading5-letter-space);
  text-transform: uppercase;
  font-family: var(--nav-font);
  font-weight: 400;
  text-align: center;

  strong {
    display: block;
    padding: var(--main-title-padding) 0;
    font-size: var(--heading1);
    font-family: var(--title-font);
    font-weight: 400;
    line-height: 100px;
    color: var(--white);
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
`;
