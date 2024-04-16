import styled from "styled-components";

export const Container = styled.header`
  height: 6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 4rem;

  @media (max-width: 768px) {
    flex-direction: row;
    height: auto;
    padding: 1rem;
    margin: auto;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    gap: 0.2rem;
  }
`;

export const Logo = styled.img`
  width: 3.125rem;
  height: 2rem;

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2rem;
  }
`;

export const NameLogo = styled.div`
  gap: 0.3rem;
`;

export const LinkLogo = styled.a`
  font-family: "Montserrat", sans-serif;
  font-size: 2.125rem;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  color: var(--color-header);

  @media (max-width: 768px) {
    font-size: 2rem;
    font-weight: 600;
    font-style: normal;
  }
`;

export const MenuOptions = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    /* display: none; */
    gap: .7rem;
  }
`;

export const NavItem = styled.a`
  margin-left: 2rem;
  text-decoration: none;

  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  color: var(--color-header);
  font-weight: 500;

  @media (max-width: 768px) {
    margin-left: 0.5rem;
  }
`;

export const NavItemIcon = styled.img`
  width: 1.75rem;
  height: 1.75rem;
`;

export const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    color: var(--color-header);
  }
`;

export const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 5rem;
  background-color: var(--background);
  border: 1px solid #ccc;
  padding: 1rem;
  z-index: 1;

  @media (max-width: 768px) {
    display: flex;
    padding-block: 4rem 4rem;
    gap: 1rem;
    width: 90%;
    text-align: center;
    font-size: 1.2rem;
  }
`;

export const MobileMenuLink = styled.a`
  margin-bottom: 1rem;
  text-decoration: none;
  color: var(--color-header);
`;
