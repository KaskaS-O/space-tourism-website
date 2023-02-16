import styled from "styled-components";

export const StyledImgContainer = styled.div`
  height: 220px;
  width: 100%;
  border-bottom: 1px solid var(--darkened-white);

  img {
    display: block;
    height: 100%;
    width: auto;
    margin: 0 auto;
  }
`;

export const StyledTitle = styled.h2`
  font-family: var(--title-font);
  font-size: var(--heading4);
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  color: var(--semi-darkened-white);
`;
