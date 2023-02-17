import styled from "styled-components";
import { devices } from "../../styles/breakpoints";

export const StyledNav = styled.nav`
  grid-area: 2/1/3/2;
  padding: 20px 0;

  @media ${devices.tabletS} {
    padding: 53px 0 32px;
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
`;

export const StyledMenuItem = styled.li`
  font-family: var(--nav-font);
  font-size: var(--subheading2);
  text-transform: uppercase;
  letter-spacing: var(--nav-letter-space);
  padding: 6px 0 8px;
  border-bottom: 3px solid rgba(255, 255, 255, 0);

  @media ${devices.tabletS} {
    font-size: var(--subheading2-tablet);
  }

  a {
    padding-bottom: 8px;

    @media ${devices.tabletS} {
      padding-bottom: 12px;
    }
  }
`;
