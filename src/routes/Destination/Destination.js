import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";

import Nav from "../../components/DestNav/DestNav";

import { StyledContent, StyledDest } from "./style";
import { StyledPageTitle } from "../../styles/common";

const Destination = () => {
  const data = useOutletContext();
  const { destinations } = data;

  const [activeDest, setActiveDest] = useState("Moon");

  const handleClick = (e) => {
    const newActiveDest =
      e.target.innerText.charAt(0).toUpperCase() +
      e.target.innerText.slice(1).toLowerCase();

    if (newActiveDest === activeDest) {
      e.preventDefault();
    } else {
      setActiveDest(newActiveDest);
    }
  };

  const [displayedDest] = destinations.filter(
    (item) => item.name === activeDest
  );

  return (
    <StyledContent>
      <StyledPageTitle>
        <span className="number">01</span>Pick your destination
      </StyledPageTitle>
      <StyledDest>
        <Nav destinations={destinations} handleClick={handleClick} />
        <Outlet
          context={[destinations, activeDest, displayedDest, handleClick]}
        />
      </StyledDest>
    </StyledContent>
  );
};

export default Destination;
