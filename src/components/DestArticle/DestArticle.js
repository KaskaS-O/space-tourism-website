import {
  StyledDetails,
  StyledImgContainer,
  StyledInfoContainer,
  StyledInfoTxt,
  StyledSubtitle,
  StyledTitle,
  StyledDestTxt,
} from "./style";

import { useOutletContext } from "react-router-dom";

const DestArticle = () => {
  const [destinations, activeDest, displayedDest] = useOutletContext();

  const { name, images, description, distance, travel } = displayedDest;

  return (
    <>
      <StyledImgContainer>
        <picture>
          <source
            srcSet={`/space-tourism-website/data/${images.webp}`}
            type="image/webp"
          />
          <img src={`/space-tourism-website/data/${images.png}`} alt={name} />
        </picture>
      </StyledImgContainer>

      <StyledTitle>{name}</StyledTitle>
      <StyledDestTxt>{description}</StyledDestTxt>
      <StyledDetails>
        <StyledInfoContainer>
          <StyledSubtitle>Avg. distance</StyledSubtitle>
          <StyledInfoTxt>{distance}</StyledInfoTxt>
        </StyledInfoContainer>
        <StyledInfoContainer>
          <StyledSubtitle>Est. travel time</StyledSubtitle>
          <StyledInfoTxt>{travel}</StyledInfoTxt>
        </StyledInfoContainer>
      </StyledDetails>
    </>
  );
};

export default DestArticle;
