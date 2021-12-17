import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroSection.styles";
import { Button } from "../Button.styles";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const toggleSignin = () => {
    scroll.scrollToBottom();
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new accoun today and receive $250 in credit towards your
          next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signin"
            onClick={toggleSignin}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary
            dark
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
