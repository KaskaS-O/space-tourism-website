import styled from "styled-components";

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  margin: var(--outer-padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`;

export const StyledLogoWrapper = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: var(--white);

  img {
    height: 100%;
    width: 100%;
  }
`;

export const StyledBtn = styled.button`
  display: ${(props) => (props.open ? "none" : "block")};
  border: none;
  background-color: transparent;
`;
