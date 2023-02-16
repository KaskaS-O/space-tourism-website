import { useOutletContext } from "react-router-dom";
import { StyledSubtitle, StyledTxt } from "../../styles/common";
import { StyledImgContainer, StyledTitle } from "./style";

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
      <StyledTxt>{description}</StyledTxt>
    </>
  );
};

export default TechArticle;
