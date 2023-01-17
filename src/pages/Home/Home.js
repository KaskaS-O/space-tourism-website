import { StyledContent, StyledMainBtn, StyledMainTitle } from "./style";

import { StyledTxt } from "../../styles/common";

const Home = () => {
  return (
    <StyledContent>
      <StyledMainTitle>
        So, you want to travel to <strong className="title">Space</strong>
      </StyledMainTitle>
      <StyledTxt>
        Let's face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we'll give you a truly out of this world
        experience!
      </StyledTxt>
      <StyledMainBtn>Explore</StyledMainBtn>
    </StyledContent>
  );
};

export default Home;
