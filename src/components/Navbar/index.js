import { FiMenu } from "react-icons/fi";

import {
  NavItem,
  LinksWrapper,
  NavLogo,
  NavContainer,
  NavEl,
  SignUpLink,
  MenuIcon,
} from "./styles";

const Navbar = () => {
  return (
    <NavEl>
      <NavContainer>
        <NavLogo to="/">Naga</NavLogo>
        <LinksWrapper>
          <NavItem to="about">About</NavItem>
          <NavItem to="features">Features</NavItem>
          <NavItem to="contact">Contact</NavItem>
        </LinksWrapper>
        <SignUpLink to="/signup">Sign Up</SignUpLink>
        <MenuIcon>
          <FiMenu />
        </MenuIcon>
      </NavContainer>
    </NavEl>
  );
};

export default Navbar;
