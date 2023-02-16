import { NavLink } from "react-router-dom";
import { StyledMenuItem, StyledMenuList, StyledNav } from "./style";

const Navigation = (props) => {
  const activeStyle = {
    color: "#0b0d17",
    backgroundColor: "#ffffff",
    border: "1px solid white",
  };

  const technology = props.technology.map((item, index) => {
    return (
      <StyledMenuItem key={item.name}>
        <NavLink
          to={item.name.toLowerCase()}
          id={item.name}
          onClick={props.handleClick}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          {index + 1}
        </NavLink>
      </StyledMenuItem>
    );
  });

  return (
    <StyledNav>
      <StyledMenuList>{technology}</StyledMenuList>
    </StyledNav>
  );
};

export default Navigation;
