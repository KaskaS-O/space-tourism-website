import styled from "styled-components";

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
  padding-bottom: 0;
`;
