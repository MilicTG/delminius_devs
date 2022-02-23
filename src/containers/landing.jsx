import React from "react";
import tw from "twin.macro";
import { Element, scroller } from "react-scroll";

import landingImg from "../assets/svg_development.svg";
import ButtonFull from "../components/btn_primary";
import ButtonSecondary from "../components/btn_secondary";

const LandingContainer = tw(Element)`
   container
   flex
   flex-col-reverse
   py-20
   items-center
   justify-center
   xl:flex-row
`;

const LandingImageContainer = tw.div`
   px-4
   w-full
`;

const LandingTextAndButtonContainer = tw.div`
   flex
   flex-col
   items-center
`;

const LandingText = tw.h1`
   my-8
   px-4
   text-4xl
   text-center
   font-bold
   text-gray-700
   md:my-16
   xl:text-6xl
   xl:text-left
`;

const ButtonContainer = tw.div`
   w-full
   px-4
   flex
   flex-col
   items-center
   xl:mt-16
   xl:flex-row
`;

const ButtonSpacer = tw.div`
   w-full
   h-4
   xl:w-8
`;

const scrollToContact = () => {
  scroller.scrollTo("Contact", {
    smooth: "easeInOutQuad",
    duration: 1500,
    offset: -70,
  });
};

const scrollToPortfolio = () => {
  scroller.scrollTo("Projects", {
    smooth: "easeInOutQuad",
    duration: 1500,
    offset: -70,
  });
};

function Landing() {
  return (
    <LandingContainer name="Home">
      <LandingTextAndButtonContainer>
        <LandingText>
          DelminiusDevs, mobile and web development agency
        </LandingText>
        <ButtonContainer>
          <ButtonFull text="Contact Us" onClick={scrollToContact} />
          <ButtonSpacer />
          <ButtonSecondary text="Our Work" onClick={scrollToPortfolio} />
        </ButtonContainer>
      </LandingTextAndButtonContainer>
      <LandingImageContainer>
        <img style={{ height: "100%" }} src={landingImg} alt="Logo" />
      </LandingImageContainer>
    </LandingContainer>
  );
}

export default Landing;
