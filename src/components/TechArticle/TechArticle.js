import { useOutletContext } from "react-router-dom";
import { StyledTxt } from "../../styles/common";
import { StyledImgContainer, StyledTechTitle, StyledTitle } from "./style";

const TechArticle = () => {
  const [technology, activeTech] = useOutletContext();

  const { name, images, description } = activeTech;
  const portrait = window.matchMedia("(orientation: portrait)").matches;

  const imgPath = portrait
    ? `/data/${images.portrait}`
    : `/data/${images.landscape}`;

  return (
    <>
      <StyledImgContainer>
        <img src={imgPath} alt={name} />
      </StyledImgContainer>
      <StyledTitle>The terminology...</StyledTitle>
      <StyledTechTitle>{name}</StyledTechTitle>
      <StyledTxt>{description}</StyledTxt>
    </>
  );
};

export default TechArticle;
