import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
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
    </nav>
  );
};

export default Menu;
