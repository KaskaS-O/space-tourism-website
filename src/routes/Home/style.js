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

export const StyledMainTitle = styled.h1``;

export const StyledMainBtn = styled.button``;
