import { NavLink } from "react-router-dom";
import { StyledNav } from "./style";

const Menu = (props) => {
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1200;

  return (
    <StyledNav open={props.open}>
      <ul>
        <li>
          <NavLink to="/" exact>
            {!isTablet ? <span className="number--mainNav">00</span> : null}
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/destination">
            {!isTablet ? <span className="number--mainNav">01</span> : null}
            Destination
          </NavLink>
        </li>
        <li>
          <NavLink to="/crew">
            {!isTablet ? <span className="number--mainNav">02</span> : null}
            Crew
          </NavLink>
        </li>
        <li>
          <NavLink to="/technology">
            {!isTablet ? <span className="number--mainNav">03</span> : null}
            Technology
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Menu;
