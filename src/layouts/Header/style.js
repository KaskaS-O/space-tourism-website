import styled from "styled-components";
import { devices } from "../../styles/breakpoints";

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

  @media ${devices.tabletS} {
    height: var(--header-height-tablet);
    margin-left: var(--outer-padding-tablet-sides);
    margin-right: var(--outer-padding-tablet-sides);
  }

  @media ${devices.laptopS} {
    top: 40px;
    margin-left: var(--outer-padding-desktop-sides);
    margin-right: var(--outer-padding-desktop-sides);
  }
`;

export const StyledLogoWrapper = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: var(--white);

  @media ${devices.tabletS} {
    height: 48px;
    width: 48px;
  }

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
