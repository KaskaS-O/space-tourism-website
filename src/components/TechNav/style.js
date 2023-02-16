import styled from "styled-components";

export const StyledNav = styled.nav`
  grid-area: 2/1/3/2;
  width: 150px;
  margin: 34px auto 26px;
`;

export const StyledMenuList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledMenuItem = styled.li`
  display: block;
  height: 40px;
  width: 40px;
  border: 1px solid var(--darkened-white);
  border-radius: 50%;
  font-family: var(--title-font);
  font-size: var(--nav-txt);
  text-align: center;
  line-height: 40px;
  color: var(--white);

  a {
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    transition: 0.2s;
  }
`;
