import styled from "styled-components";
import { devices } from "../../styles/breakpoints";

export const StyledNav = styled.nav`
  grid-area: 2/1/3/2;
  padding: 20px 0;

  @media ${devices.tabletS} {
    padding: 53px 0 32px;
  }

  @media ${devices.laptopS} {
    grid-area: 1/2/2/3;
    padding: 0 0 30px;
    margin-left: 0;
    margin-right: auto;
  }
`;

export const StyledMenuList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 72%;
  margin: 0 auto;

  @media ${devices.tabletS} {
    width: 42%;
  }

  @media ${devices.laptopS} {
    width: 100%;
    flex-wrap: nowrap;
  }
`;

export const StyledMenuItem = styled.li`
  font-family: var(--nav-font);
  font-size: var(--subheading2);
  text-transform: uppercase;
  letter-spacing: var(--nav-letter-space);
  padding: 6px 0 8px;

  @media ${devices.tabletS} {
    font-size: var(--subheading2-tablet);
    letter-spacing: var(--nav-letter-space-tablet);
  }

  @media ${devices.laptopS} {
    margin-right: 35px;
  }

  a {
    padding-bottom: 8px;
    border-bottom: 3px solid rgba(255, 255, 255, 0);
    transition: 0.2s;

    &:hover {
      border-bottom-color: rgba(151, 151, 151, 0.521);
    }

    @media ${devices.tabletS} {
      padding-bottom: 12px;
    }
  }
`;
