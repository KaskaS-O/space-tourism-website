import {
  StyledDest,
  StyledDetails,
  StyledImgContainer,
  StyledInfoContainer,
  StyledInfoTxt,
  StyledSubtitle,
  StyledTitle,
} from "./style";

import Nav from "../../components/DestNav/DestNav";
import { StyledTxt } from "../../styles/common";

const DestArticle = (props) => {
  console.log(props);

  return (
    <StyledDest>
      <StyledImgContainer>Img</StyledImgContainer>
      <Nav />
      <StyledTitle>Earth</StyledTitle>
      <StyledTxt>Text</StyledTxt>
      <StyledDetails>
        <StyledInfoContainer>
          <StyledSubtitle>Avg. distance</StyledSubtitle>
          <StyledInfoTxt>1245 km</StyledInfoTxt>
        </StyledInfoContainer>
        <StyledInfoContainer>
          <StyledSubtitle>Est. travel time</StyledSubtitle>
          <StyledInfoTxt>3 days</StyledInfoTxt>
        </StyledInfoContainer>
      </StyledDetails>
    </StyledDest>
  );
};

export default DestArticle;
