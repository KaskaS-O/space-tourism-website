import { NavLink } from "react-router-dom";
import { StyledMenuList, StyledNav, StyledMenuItem } from "./style";

const Navigation = (props) => {
  const activeStyle = {
    borderBottom: "3px solid white",
    color: "white",
  };

  const destinations = props.destinations.map((item, index) => {
    return (
      <StyledMenuItem key={item.name}>
        <NavLink
          to={item.name.toLowerCase()}
          onClick={props.handleClick}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          {item.name}
        </NavLink>
      </StyledMenuItem>
    );
  });

  return (
    <StyledNav>
      <StyledMenuList>{destinations}</StyledMenuList>
    </StyledNav>
  );
};

export default Navigation;
