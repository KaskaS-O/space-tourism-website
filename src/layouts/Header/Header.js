import { useState, useEffect } from "react";
import Menu from "../../components/MainNav/MainNav";
import logo from "../../assets/shared/logo.svg";
import { ReactComponent as MenuIcon } from "../../assets/shared/icon-hamburger.svg";
import { StyledBtn, StyledHeader, StyledLogoWrapper } from "./style";
import React from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(window.innerWidth >= 768 ? true : false);
  }, []);

  return (
    <StyledHeader>
      <StyledLogoWrapper className="logo-wrapper" aria-hidden="true">
        <img src={logo} alt="" />
      </StyledLogoWrapper>
      <StyledBtn open={open} onClick={() => setOpen(true)}>
        <MenuIcon />
      </StyledBtn>
      <Menu open={open} />
    </StyledHeader>
  );
};

export default Header;
