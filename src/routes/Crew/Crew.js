import { useState } from "react";
import { useOutletContext, Outlet } from "react-router-dom";

import Nav from "../../components/CrewNav/CrewNav";

import { StyledContent, StyledCrew } from "./style";
import { StyledPageTitle } from "../../styles/common";

const Crew = () => {
  const data = useOutletContext();
  const { crew } = data;

  const [activeCrew, setActiveCrew] = useState(crew[0]);

  const handleClick = (e) => {
    const newActiveCrewName = e.target.parentElement.parentElement.id;

    if (newActiveCrewName === activeCrew.name) {
      e.preventDefault();
    } else {
      const [newActiveCrew] = crew.filter(
        (item) => item.name === newActiveCrewName
      );

      setActiveCrew(newActiveCrew);
    }
  };

  return (
    <StyledContent>
      <StyledPageTitle>
        <span className="number">02</span>Meet your crew
      </StyledPageTitle>
      <StyledCrew>
        <Nav crew={crew} handleClick={handleClick} />
        <Outlet context={[crew, activeCrew]} />
      </StyledCrew>
    </StyledContent>
  );
};

export default Crew;
