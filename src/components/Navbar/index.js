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

const Navbar = ({ setIsOpen }) => {
  return (
    <NavEl>
      <NavContainer>
        <NavLogo to="/">Naga</NavLogo>
        <LinksWrapper>
          <NavItem to="about">About</NavItem>
          <NavItem to="services">Services</NavItem>
          <NavItem to="features">Features</NavItem>
        </LinksWrapper>
        <SignUpLink to="/signup">Sign Up</SignUpLink>
        <MenuIcon>
          <FiMenu onClick={() => setIsOpen(true)} />
        </MenuIcon>
      </NavContainer>
    </NavEl>
  );
};

export default Navbar;
