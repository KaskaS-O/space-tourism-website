import { NavLink } from "react-router-dom";
import { StyledNav } from "./style";

const Menu = (props) => {
  return (
    <StyledNav open={props.open}>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/destination">Destination</NavLink>
        </li>
        <li>
          <NavLink to="/crew">Crew</NavLink>
        </li>
        <li>
          <NavLink to="/technology">Technology</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Menu;
