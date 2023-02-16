import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { StyledMenuList, StyledNav, StyledMenuItem } from "./style";

const dotIcon = <FontAwesomeIcon icon={faCircle} />;

const Navigation = (props) => {
  const activeStyle = {
    color: "white",
  };

  const crew = props.crew.map((item) => {
    return (
      <StyledMenuItem key={item.name}>
        <NavLink
          to={item.name.toLowerCase()}
          id={item.name}
          onClick={props.handleClick}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          {dotIcon}
        </NavLink>
      </StyledMenuItem>
    );
  });

  return (
    <StyledNav>
      <StyledMenuList>{crew}</StyledMenuList>
    </StyledNav>
  );
};

export default Navigation;
