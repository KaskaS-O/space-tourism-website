import { Link } from "react-router-dom";

import {
  StyledContent,
  StyledMainBtn,
  StyledMainTitle,
  StyledMainTxt,
} from "./style";

const Home = () => {
  return (
    <StyledContent>
      <StyledMainTitle>
        So, you want to travel to <strong className="title">Space</strong>
      </StyledMainTitle>
      <StyledMainTxt>
        Let's face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we'll give you a truly out of this world
        experience!
      </StyledMainTxt>
      <StyledMainBtn>
        <Link to="/destination/moon">Explore</Link>
      </StyledMainBtn>
    </StyledContent>
  );
};

export default Home;
