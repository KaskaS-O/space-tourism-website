import styled from "styled-components";

import BgMobile from "../../assets/technology/background-technology-mobile.jpg";
import BgTablet from "../../assets/technology/background-technology-tablet.jpg";
import BgDesktop from "../../assets/technology/background-technology-desktop.jpg";

const bg =
  window.innerWidth < 768
    ? BgMobile
    : window.innerWidth < 1200
    ? BgTablet
    : BgDesktop;

export const StyledContent = styled.main`
  background-image: url(${bg});
`;

export const StyledTechnology = styled.article`
  display: grid;
`;
