import styled from "styled-components";

export const StyledImgContainer = styled.div`
  height: 170px;
  width: 170px;
  margin: 0 auto;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const StyledTitle = styled.h2`
  font-family: var(--title-font);
  font-size: var(--heading2);
  font-weight: 400;
  text-transform: uppercase;
  color: var(--white);
  text-align: center;
`;

export const StyledDetails = styled.section`
  text-align: center;
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    margin: 32px 0;
    background-color: var(--darkened-white);
  }
`;

export const StyledInfoContainer = styled.div`
  &:nth-of-type(1) {
    padding-bottom: 32px;
  }
`;

export const StyledSubtitle = styled.h3`
  padding-bottom: 12px;
  font-family: var(--nav-font);
  font-size: var(--subheading2);
  text-transform: uppercase;
  letter-spacing: var(--subheading2-letter-space);
  font-weight: 400;
`;

export const StyledInfoTxt = styled.p`
  font-family: var(--title-font);
  font-size: var(--subheading1);
  text-transform: uppercase;
  color: var(--white);
`;
