import styled from "styled-components";
import { devices } from "../../styles/breakpoints";

import BgMobile from "../../assets/crew/background-crew-mobile.jpg";
import BgTablet from "../../assets/crew/background-crew-tablet.jpg";
import BgDesktop from "../../assets/crew/background-crew-desktop.jpg";

const bg =
  window.innerWidth <= 375 && window.innerHeight <= 810
    ? BgMobile
    : window.innerWidth <= 1024
    ? BgTablet
    : BgDesktop;

export const StyledContent = styled.main`
  background-image: url(${bg});
  background-color: rgba(0, 0, 0, 0.25);
  background-blend-mode: darken;
`;

export const StyledCrew = styled.article`
  display: grid;

  @media ${devices.laptopS} {
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr repeat(2, auto) 2fr;
    justify-content: space-between;
    padding: 0 135px 0 50px;
  }

  @media ${devices.laptopM} {
    padding-left: 110px;
  }
`;
