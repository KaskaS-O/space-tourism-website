import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  const technology = props.technology.map((item, index) => {
    return (
      <li key={item.name}>
        <NavLink
          to={item.name.toLowerCase()}
          id={item.name}
          onClick={props.handleClick}
        >
          {index + 1}
        </NavLink>
      </li>
    );
  });

  return (
    <nav>
      <ul>{technology}</ul>
    </nav>
  );
};

export default Navigation;
