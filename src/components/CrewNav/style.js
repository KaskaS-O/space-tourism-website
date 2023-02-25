import styled from "styled-components";
import { devices } from "../../styles/breakpoints";

export const StyledNav = styled.nav`
  grid-area: 2/1/3/2;
  width: 90px;
  margin: 32px auto;

  @media ${devices.tabletS} {
    grid-area: 4/1/5/2;
  }

  @media ${devices.laptopS} {
    grid-area: 4/1/5/2;
    align-self: end;
    margin: 35px 0;
    width: 130px;
    height: fit-content;
  }
`;

export const StyledMenuList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledMenuItem = styled.li`
  font-size: 15px;

  a {
    color: var(--darkened-white);
    transition: 0.2s;

    &:hover {
      color: rgba(151, 151, 151, 0.521);
    }
  }
`;
