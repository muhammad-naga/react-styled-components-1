import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { animateScroll as scroll } from "react-scroll";

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
  const [isScollable, setIsScrollable] = useState(false);

  const onChangeScroll = () => {
    if (window.scrollY >= 100) {
      setIsScrollable(true);
    } else {
      setIsScrollable(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onChangeScroll);
  }, []);

  return (
    <NavEl isScollable={isScollable}>
      <NavContainer>
        <NavLogo to="/" onClick={() => scroll.scrollToTop()}>
          Naga
        </NavLogo>
        <LinksWrapper>
          <NavItem to="boost" smooth exact="true" duration={500} offset={-68}>
            Boost
          </NavItem>
          <NavItem to="support" smooth exact="true" duration={500} offset={-68}>
            Support
          </NavItem>
          <NavItem
            to="features"
            smooth
            exact="true"
            duration={500}
            offset={-68}
          >
            Features
          </NavItem>
          <NavItem to="payment" smooth exact="true" duration={500} offset={-68}>
            Payment
          </NavItem>
          <NavItem
            to="jackpots"
            smooth
            exact="true"
            duration={500}
            offset={-68}
          >
            Jackpots
          </NavItem>
          <NavItem
            to="performance"
            smooth
            exact="true"
            duration={500}
            offset={-68}
          >
            Performance
          </NavItem>
        </LinksWrapper>
        <SignUpLink to="/">Sign Up</SignUpLink>
        <MenuIcon>
          <FiMenu onClick={() => setIsOpen(true)} />
        </MenuIcon>
      </NavContainer>
    </NavEl>
  );
};

export default Navbar;
