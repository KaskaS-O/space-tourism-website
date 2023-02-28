import { NavLink } from "react-router-dom";

import { StyledNav, StyledBtnContainer, StyledNavBtn } from "./style";
import { ReactComponent as CloseIcon } from "../../assets/shared/icon-close.svg";

const Menu = (props) => {
  const { destinations, crew, technology } = props.data;

  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1200;

  const activeStyle = {
    borderBottom: "3px solid white",
  };

  const menuRoutes = [
    { name: "home", path: "/", exact: true, number: "00" },
    {
      name: "destination",
      path: `/destination/${destinations[0].name}`,
      number: "01",
    },
    { name: "crew", path: `/crew/${crew[0].name}`, number: "02" },
    {
      name: "technology",
      path: `/technology/${technology[0].name}`,
      number: "03",
    },
  ];

  const menuList = menuRoutes.map((item) => (
    <li>
      <NavLink
        to={item.path}
        onClick={props.handleNavClick}
        style={({ isActive }) => (isActive && !isMobile ? activeStyle : null)}
      >
        {!isTablet ? (
          <span className="number number--mainNav">{item.number}</span>
        ) : null}
        {item.name}
      </NavLink>
    </li>
  ));

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
        {/* <li>
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
            style={({ isActive }) =>
              isActive && !isMobile ? activeStyle : null
            }
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
            style={({ isActive }) =>
              isActive && !isMobile ? activeStyle : null
            }
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
            style={({ isActive }) =>
              isActive && !isMobile ? activeStyle : null
            }
          >
            {!isTablet ? (
              <span className="number number--mainNav">03</span>
            ) : null}
            Technology
          </NavLink>
        </li> */}
        {menuList}
      </ul>
    </StyledNav>
  );
};

export default Menu;
