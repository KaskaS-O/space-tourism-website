import styled from "styled-components";

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
`;
