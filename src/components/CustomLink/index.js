import { LinkItem, Wrapper } from "./styles";

const CustomLink = ({ text, target }) => {
  return (
    <Wrapper>
      <LinkItem to={target}>{text}</LinkItem>
    </Wrapper>
  );
};

export default CustomLink;
