import styled from "styled-components";
import { devices } from "../../styles/breakpoints";

import BgMobile from "../../assets/destination/background-destination-mobile.jpg";
import BgTablet from "../../assets/destination/background-destination-tablet.jpg";
import BgDesktop from "../../assets/destination/background-destination-desktop.jpg";

const bg =
  window.innerWidth <= 375 && window.innerHeight <= 850
    ? BgMobile
    : window.innerWidth <= 1024
    ? BgTablet
    : BgDesktop;

export const StyledContent = styled.main`
  background-image: url(${bg});
`;

export const StyledDest = styled.article`
  display: grid;

  @media ${devices.laptopS} {
    grid-template-columns: auto 445px;
    grid-template-rows: auto auto 1fr auto;
    justify-content: space-between;
    width: 1000px;
    margin-right: calc(165px - var(--outer-padding-desktop-sides));
    margin-left: calc(70px - var(--outer-padding-desktop-sides));
    padding-bottom: 0;
    padding-left: 0;
  }

  @media ${devices.laptopM} {
    margin-left: calc(230px - var(--outer-padding-desktop-sides));
  }

  @media ${devices.desktop} {
    width: 1200px;
  }
`;
