import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const dotIcon = <FontAwesomeIcon icon={faCircle} />;

const Navigation = (props) => {
  const crew = props.crew.map((item) => {
    return (
      <li key={item.name}>
        <NavLink
          to={item.name.toLowerCase()}
          id={item.name}
          onClick={props.handleClick}
        >
          {dotIcon}
        </NavLink>
      </li>
    );
  });

  return (
    <nav>
      <ul>{crew}</ul>
    </nav>
  );
};

export default Navigation;
