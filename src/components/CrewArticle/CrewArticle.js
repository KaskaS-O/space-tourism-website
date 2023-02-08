import { useOutletContext } from "react-router-dom";
import { StyledTxt } from "../../styles/common";
import { StyledImgContainer, StyledTitle, StyledName } from "./style";

const CrewArticle = () => {
  const [crew, activeCrew] = useOutletContext();
  // console.log(crew, activeCrew);

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
      <StyledName>{name}</StyledName>
      <StyledTxt>{bio}</StyledTxt>
    </>
  );
};

export default CrewArticle;
