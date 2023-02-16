import styled from "styled-components";

export const StyledNav = styled.nav`
  grid-area: 2/1/3/2;
  padding: 20px 0;
`;

export const StyledMenuList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 72%;
  margin: 0 auto;
`;

export const StyledMenuItem = styled.li`
  font-family: var(--nav-font);
  font-size: var(--subheading2);
  text-transform: uppercase;
  letter-spacing: var(--nav-letter-space);
  padding: 6px 0 8px;
  border-bottom: 3px solid rgba(255, 255, 255, 0);

  a {
    padding-bottom: 8px;
  }
`;
