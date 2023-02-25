import styled from "styled-components";
import { devices } from "../../styles/breakpoints";

export const StyledNav = styled.nav`
  position: absolute;
  z-index: 1;
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

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.04);
  }

  @media ${devices.tabletS} {
    left: calc(100vw - calc(450px + 46px));
    width: 450px;
    height: calc(var(--header-height-tablet) + 2 * var(--outer-padding));
    padding: 0 46px;
    backdrop-filter: blur(5px);
  }

  @media ${devices.laptopS} {
    width: 58vw;
    left: calc(100vw - calc(58vw + 55px));
    padding: 0 165px 0 123px;
    backdrop-filter: blur(20px);
  }

  @media ${devices.laptopS} {
    &::after {
      position: absolute;
      top: 50%;
      left: -380px;
      content: "";
      width: 400px;
      height: 1px;
      background-color: var(--darkened-white);

      @media ${devices.laptopM} {
        left: -450px;
        width: 475px;
      }

      @media ${devices.desktop} {
        width: 600px;
        left: -570px;
      }
    }
  }

  ul {
    position: relative;
    padding-top: 45px;
    color: var(--white);

    @media ${devices.tabletS} {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0;
      font-size: var(--subheading2);
    }

    @media ${devices.laptopS} {
      font-size: var(--subheading2-tablet);
      min-width: 480px;
    }
  }

  li {
    padding-bottom: 32px;

    @media ${devices.tabletS} {
      padding-bottom: 0;
      line-height: 93px;
    }
  }

  a {
    @media ${devices.tabletS} {
      display: block;
      box-sizing: border-box;
      height: 100%;
      border-bottom: 3px solid rgba(255, 255, 255, 0);
      transition: 0.2s;
    }

    &:hover {
      border-bottom-color: rgba(151, 151, 151, 0.521);
    }
  }
`;

export const StyledBtnContainer = styled.div`
  position: relative;
  top: 0;
  left: calc(100% - var(--outer-padding));
  height: 40px;
  width: fit-content;
`;

export const StyledNavBtn = styled.button`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
`;
