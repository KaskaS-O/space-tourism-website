import styled from "styled-components";

export const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 78%;
  margin-top: calc(-1 * var(--outer-padding));
  padding: var(--outer-padding) var(--outer-padding) 0
    calc(var(--outer-padding) * 1.33);
  transform: ${(props) =>
    props.open ? `translateX(24px)` : "translateX(200%)"};
  transition: 0.3s;
  font-family: var(--nav-font);
  font-size: var(--nav-txt);
  text-transform: uppercase;
  letter-spacing: var(--nav-letter-space);

  background: inherit;
  backdrop-filter: blur(40px);

  ul {
    position: relative;
    padding-top: 45px;
    color: var(--white);
  }

  li {
    padding-bottom: 32px;
  }
`;

export const StyledBtnContainer = styled.div`
  position: relative;
  top: 0;
  left: calc(100% - var(--outer-padding));
  height: 50px;
  width: fit-content;
`;

export const StyledNavBtn = styled.button`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
`;
