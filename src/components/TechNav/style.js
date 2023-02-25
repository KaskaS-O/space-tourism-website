import styled from "styled-components";
import { devices } from "../../styles/breakpoints";

export const StyledNav = styled.nav`
  grid-area: 2/1/3/2;
  width: 150px;
  margin: 34px auto 26px;

  @media ${devices.tabletS} {
    width: 210px;
    margin: 56px auto 44px;
  }

  @media ${devices.laptopS} {
    grid-area: 1/1/4/2;
    margin: 0;
    width: 160px;
  }
`;

export const StyledMenuList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${devices.laptopS} {
    flex-direction: column;
    align-content: space-between;
    height: 303px;
  }
`;

export const StyledMenuItem = styled.li`
  display: block;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  font-family: var(--title-font);
  font-size: var(--nav-txt);
  text-align: center;
  line-height: 40px;
  color: var(--white);

  @media ${devices.tabletS} {
    height: 60px;
    width: 60px;
    line-height: 60px;
    font-size: var(--nav-txt-tablet);
  }

  @media ${devices.laptopS} {
    height: 80px;
    width: 80px;
    line-height: 80px;
    font-size: var(--nav-txt-desktop);
  }

  a {
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 1px solid var(--darkened-white);
    transition: 0.2s;

    &:hover {
      border-color: var(--white);
    }
  }
`;
