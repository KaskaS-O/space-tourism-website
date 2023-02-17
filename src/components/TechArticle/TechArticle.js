import { useOutletContext } from "react-router-dom";
import { StyledSubtitle } from "../../styles/common";
import { StyledImgContainer, StyledTitle, StyledTechTxt } from "./style";

const TechArticle = () => {
  const [technology, activeTech] = useOutletContext();

  const { name, images, description } = activeTech;
  const isDesktop = window.innerWidth >= 1200 ? true : false;

  const imgPath = isDesktop
    ? `/data/${images.portrait}`
    : `/data/${images.landscape}`;

  return (
    <>
      <StyledImgContainer>
        <img src={imgPath} alt={name} />
      </StyledImgContainer>
      <StyledTitle>The terminology...</StyledTitle>
      <StyledSubtitle>{name}</StyledSubtitle>
      <StyledTechTxt>{description}</StyledTechTxt>
    </>
  );
};

export default TechArticle;
