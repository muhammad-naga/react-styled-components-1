import { MdClose } from "react-icons/md";
import {
  BtnWrapper,
  CloseIcon,
  LinkItem,
  LinksWrapper,
  SidebarWrapper,
  SignupLink,
} from "./styles";

const SideBar = ({ isOpen, setIsOpen }) => {
  return (
    <SidebarWrapper isOpen={isOpen}>
      <CloseIcon>
        <MdClose onClick={() => setIsOpen(!isOpen)} />
      </CloseIcon>
      <LinksWrapper>
        <LinkItem to="about">About</LinkItem>
        <LinkItem to="services">Services</LinkItem>
        <LinkItem to="features">Features</LinkItem>
        <LinkItem to="about">About</LinkItem>
      </LinksWrapper>
      <BtnWrapper>
        <SignupLink to="/signup">Sign up</SignupLink>
      </BtnWrapper>
    </SidebarWrapper>
  );
};

export default SideBar;
