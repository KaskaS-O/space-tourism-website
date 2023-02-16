import { useOutletContext } from "react-router-dom";
import { StyledSubtitle, StyledTxt } from "../../styles/common";
import { StyledImgContainer, StyledTitle } from "./style";

const CrewArticle = () => {
  const [crew, activeCrew] = useOutletContext();

  const { name, images, role, bio } = activeCrew;

  return (
    <>
      <StyledImgContainer>
        <picture>
          <source srcSet={`/data/${images.webp}`} type="image/webp" />
          <img src={`/data/${images.png}`} alt={name} />
        </picture>
      </StyledImgContainer>
      <StyledTitle>{role}</StyledTitle>
      <StyledSubtitle>{name}</StyledSubtitle>
      <StyledTxt>{bio}</StyledTxt>
    </>
  );
};

export default CrewArticle;
