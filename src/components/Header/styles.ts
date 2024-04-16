import styled from "styled-components";

export const Container = styled.header`
  height: 6.25rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 4rem;
  padding: 10rem;

  /* border: 1px solid red; */
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Logo = styled.img`
  width: 3.125rem;
  height: 2rem;
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
`;

export const MenuOptions = styled.div`
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.a`
  margin-left: 2rem;
  text-decoration: none;

  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  color: var(--color-header);
  font-weight: 500;
`;

export const NavItemIcon = styled.img`
  width: 1.75rem;
  height: 1.75rem;
`;
