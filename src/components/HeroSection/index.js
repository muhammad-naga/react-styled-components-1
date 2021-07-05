import {
  ContentWrapper,
  HeroDesc,
  HeroSectionContainer,
  HeroText,
  VideoBG,
  VideoWrapper,
} from "./styles";
import Video from "./../../videos/video.mp4";
import CustomLink from "../CustomLink";

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <VideoWrapper>
        <VideoBG autoPlay loop muted src={Video} type="video/mp4" />
      </VideoWrapper>
      <ContentWrapper>
        <HeroText>KEEP IN TOUCH</HeroText>
        <HeroDesc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          aspernatur delectus error ab magni iusto impedit voluptatem temporibus
          maiores quod?
        </HeroDesc>
        <CustomLink text="get started" target="about" />
      </ContentWrapper>
    </HeroSectionContainer>
  );
};

export default HeroSection;
