import styled from "styled-components";
import { devices } from "../../styles/breakpoints";

import BgMobile from "../../assets/technology/background-technology-mobile.jpg";
import BgTablet from "../../assets/technology/background-technology-tablet.jpg";
import BgDesktop from "../../assets/technology/background-technology-desktop.jpg";

const bg =
  window.innerWidth <= 375 && window.innerHeight <= 710
    ? BgMobile
    : window.innerWidth < 1024
    ? BgTablet
    : BgDesktop;

export const StyledContent = styled.main`
  background-image: url(${bg});
`;

export const StyledTechnology = styled.article`
  display: grid;

  @media ${devices.laptopS} {
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto auto 1fr;
    padding: 40px 0 0 50px;
  }

  @media ${devices.laptopM} {
    padding-left: 110px;
  }
`;
