import { useState, useEffect } from "react";
import Menu from "../../components/MainNav/MainNav";
import logo from "../../assets/shared/logo.svg";
import { ReactComponent as MenuIcon } from "../../assets/shared/icon-hamburger.svg";
import { StyledBtn, StyledHeader, StyledLogoWrapper } from "./style";
import React from "react";

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    setOpen(window.innerWidth >= 768 ? true : false);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleNavClick = () => {
    if (isMobile) {
      setOpen(false);
    }
  };

  return (
    <StyledHeader>
      <StyledLogoWrapper className="logo-wrapper" aria-hidden="true">
        <img src={logo} alt="" />
      </StyledLogoWrapper>
      {isMobile && (
        <StyledBtn open={open} onClick={() => setOpen(true)}>
          <MenuIcon />
        </StyledBtn>
      )}
      <Menu
        open={open}
        handleClose={handleClose}
        handleNavClick={handleNavClick}
      />
    </StyledHeader>
  );
};

export default Header;
