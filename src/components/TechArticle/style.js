import styled from "styled-components";

export const StyledImgContainer = styled.div`
  position: relative;

  height: 170px;
  width: 100%;

  img {
    position: absolute;
    z-index: 0;
    left: calc(-1 * var(--outer-padding));
    top: 0;
    height: 100%;
    width: 100vw;
  }
`;

export const StyledTitle = styled.h2`
  font-family: var(--nav-font);
  font-size: var(--subheading2);
  letter-spacing: var(--subheading2-letter-space);
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
`;
