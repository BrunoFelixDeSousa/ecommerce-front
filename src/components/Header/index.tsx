import { useState } from "react";
import { RiApps2Line } from "@remixicon/react";

import logoSvg from "../../assets/svg/Meubel_House_Logo.svg";
import cart from "../../assets/svg/cart.svg";
import like from "../../assets/svg/like.svg";
import profile from "../../assets/svg/profile.svg";
import search from "../../assets/svg/search.svg";

import {
  Container,
  Logo,
  LogoContainer,
  NameLogo,
  LinkLogo,
  Nav,
  NavItem,
  NavItemIcon,
  MenuOptions,
  MobileMenu,
  MobileMenuLink,
  MenuIcon,
} from "./styles";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Container>
        <LogoContainer>
          <Logo src={logoSvg} alt="Logo Meubel House" />
          <NameLogo>
            <LinkLogo href="#">Furniro</LinkLogo>
          </NameLogo>
        </LogoContainer>

        <MenuOptions>
          <NavItem href="#">Home</NavItem>
          <NavItem href="#">Shop</NavItem>
          <NavItem href="#">About</NavItem>
          <NavItem href="#">Contact</NavItem>
        </MenuOptions>

        <Nav>
          <NavItem href="#">
            <NavItemIcon src={profile} alt="perfil" />
          </NavItem>
          <NavItem href="#">
            <NavItemIcon src={search} alt="pesquisar" />
          </NavItem>
          <NavItem href="#">
            <NavItemIcon src={like} alt="curtir" />
          </NavItem>
          <NavItem href="#">
            <NavItemIcon src={cart} alt="carrinho" />
          </NavItem>
        </Nav>

        <MenuIcon onClick={toggleMenu}>
          <RiApps2Line size={30} />
        </MenuIcon>

        {showMenu && (
          <MobileMenu>
            <MobileMenuLink href="#">Home</MobileMenuLink>
            <MobileMenuLink href="#">Shop</MobileMenuLink>
            <MobileMenuLink href="#">About</MobileMenuLink>
            <MobileMenuLink href="#">Contact</MobileMenuLink>
          </MobileMenu>
        )}
      </Container>
    </>
  );
}
