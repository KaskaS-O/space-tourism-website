import { useState } from "react";
import { useOutletContext, Outlet } from "react-router-dom";

import Nav from "../../components/TechNav/TechNav";

import { StyledPageTitle } from "../../styles/common";
import { StyledContent, StyledTechnology } from "./style";

const Technology = (props) => {
  const data = useOutletContext();
  const { technology } = data;

  const [activeTech, setActiveTech] = useState(technology[0]);

  const handleClick = (e) => {
    const newActiveTechName = e.target.id;

    if (newActiveTechName === activeTech.name) {
      e.preventDefault();
    } else {
      const [newActiveTech] = technology.filter(
        (item) => item.name === newActiveTechName
      );

      setActiveTech(newActiveTech);
    }
  };

  return (
    <>
      <StyledContent>
        <StyledPageTitle>
          <span className="number">03</span>Space launch 101
        </StyledPageTitle>
        <StyledTechnology>
          <Nav technology={technology} handleClick={handleClick} />
          <Outlet context={[technology, activeTech]} />
        </StyledTechnology>
      </StyledContent>
    </>
  );
};

export default Technology;
