import { NavLink } from "react-router-dom";
import { StyledNav, StyledBtnContainer, StyledNavBtn } from "./style";

import { ReactComponent as CloseIcon } from "../../assets/shared/icon-close.svg";

const Menu = (props) => {
  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1200;

  const activeStyle = {
    borderBottom: "3px solid white",
  };

  return (
    <StyledNav open={props.open}>
      {isMobile && (
        <StyledBtnContainer>
          <StyledNavBtn onClick={props.handleClose}>
            <CloseIcon />
          </StyledNavBtn>
        </StyledBtnContainer>
      )}
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            onClick={props.handleNavClick}
            style={({ isActive }) =>
              isActive && !isMobile ? activeStyle : null
            }
          >
            {!isTablet ? (
              <span className="number number--mainNav">00</span>
            ) : null}
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/destination"
            onClick={props.handleNavClick}
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            {!isTablet ? (
              <span className="number number--mainNav">01</span>
            ) : null}
            Destination
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/crew"
            onClick={props.handleNavClick}
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            {!isTablet ? (
              <span className="number number--mainNav">02</span>
            ) : null}
            Crew
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/technology"
            onClick={props.handleNavClick}
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            {!isTablet ? (
              <span className="number number--mainNav">03</span>
            ) : null}
            Technology
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Menu;
