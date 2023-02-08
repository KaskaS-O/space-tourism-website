import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  const destinations = props.destinations.map((item) => {
    return (
      <li key={item.name}>
        <NavLink to={item.name.toLowerCase()} onClick={props.handleClick}>
          {item.name}
        </NavLink>
      </li>
    );
  });

  return (
    <nav>
      <ul>{destinations}</ul>
    </nav>
  );
};

export default Navigation;
