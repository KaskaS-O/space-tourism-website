import Menu from "../../components/MainNav/MainNav";
import logo from "../../assets/shared/logo.svg";
import { ReactComponent as MenuIcon } from "../../assets/shared/icon-hamburger.svg";
import { StyledLogoWrapper } from "./style";

const Header = () => {
  const menu = window.innerWidth < 768 ? <MenuIcon /> : <Menu />;
  return (
    <header>
      <StyledLogoWrapper className="logo-wrapper" aria-hidden="true">
        <img src={logo} alt="" />
      </StyledLogoWrapper>
      {menu}
    </header>
  );
};

export default Header;
