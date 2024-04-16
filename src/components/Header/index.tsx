import logoSvg from "../../assets/svg/Meubel_House_Logo.svg";
import nameLogo from "../../assets/svg/SkinClinic.svg";
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
  MenuOptions
} from "./styles";

export function Header() {
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
      </Container>
    </>
  );
}
