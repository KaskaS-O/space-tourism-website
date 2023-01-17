import DestArticle from "../../components/DestArticle/DestArticle";

import { StyledContent } from "./style";
import { StyledPageTitle } from "../../styles/common";

const Destination = (props) => {
  console.log(props.data.destinations);
  const dest = props.data.destinations;
  return (
    <StyledContent>
      <StyledPageTitle>
        <span className="number">01</span>Pick your destination
      </StyledPageTitle>
      <DestArticle dest={dest} />
    </StyledContent>
  );
};

export default Destination;
