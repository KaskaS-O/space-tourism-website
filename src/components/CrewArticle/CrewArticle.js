import { useOutletContext } from "react-router-dom";
import { StyledSubtitle } from "../../styles/common";
import { StyledImgContainer, StyledTitle, StyledCrewTxt } from "./style";

const CrewArticle = () => {
  const [crew, activeCrew] = useOutletContext();

  const { name, images, role, bio } = activeCrew;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1200;

  return (
    <>
      <StyledImgContainer>
        <picture>
          <source
            srcSet={`./space-tourism-website/data/${images.webp}`}
            type="image/webp"
          />
          <img src={`./space-tourism-website/data/${images.png}`} alt={name} />
        </picture>
      </StyledImgContainer>
      <StyledTitle>{role}</StyledTitle>
      <StyledSubtitle>{name}</StyledSubtitle>
      {isTablet ? (
        <div className="container">
          <div className="widthSetter"></div>
          <StyledCrewTxt>{bio}</StyledCrewTxt>
          <div className="widthSetter"></div>
        </div>
      ) : (
        <StyledCrewTxt>{bio}</StyledCrewTxt>
      )}
    </>
  );
};

export default CrewArticle;
