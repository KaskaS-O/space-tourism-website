import styled from "styled-components";

export const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(200%)")};
  transition: 0.2s;
`;
