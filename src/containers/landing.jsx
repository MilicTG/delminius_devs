import React from "react";
import tw from "twin.macro";

import landingImg from "../assets/svg_development.svg";
import ButtonFull from "../components/btn_primary";
import ButtonSecondary from "../components/btn_secondary";

const LandingContainer = tw.section`
   container
   flex
   flex-col-reverse
   py-20
   items-center
   justify-center
   xl:flex-row
`;

const LandingImageConatiner = tw.div`
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
   font-medium
   text-gray-700
   md:my-16
   xl:text-6xl
   xl:text-left
`;

const ButtonContainer = tw.div`
   w-full
   flex
   flex-col
   items-center
   xl:mt-16
   xl:flex-row
   xl:px-4
`;

const ButtonSpacer = tw.div`
   w-full
   h-4
   xl:w-8
`;

function Landing() {
  return (
    <LandingContainer>
      <LandingTextAndButtonContainer>
        <LandingText>
          DelminiusDevs, a mobile and web development agency
        </LandingText>
        <ButtonContainer>
          <ButtonFull text="Contact Us" />
          <ButtonSpacer />
          <ButtonSecondary text="Our Work" />
        </ButtonContainer>
      </LandingTextAndButtonContainer>
      <LandingImageConatiner>
        <img style={{ height: "100%" }} src={landingImg} alt="Logo" />
      </LandingImageConatiner>
    </LandingContainer>
  );
}

export default Landing;
