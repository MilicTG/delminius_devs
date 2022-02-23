import React from "react";
import tw from "twin.macro";
import TitleSectionSecondary from "../components/title_section_secondary";
import { Element } from "react-scroll";

import aboutSvg from "../assets/svg_about.svg";

const AboutUsContainer = tw(Element)`
   w-full
   my-2
   px-4
   bg-primary_blue-100
   flex
   justify-center
   items-center
   lg:py-16
`;

const AboutUsContentWrapper = tw.div`
   container
   py-8
   flex
   flex-col
   justify-center
   items-center
`;

const AboutUsContentContainer = tw.div`
   w-full
   flex
   flex-col
   justify-center
   items-center
   xl:flex-row
`;

const AboutUsTextContainer = tw.div`
   flex
   flex-col
   w-full
   lg:w-7/12	
`;

const AboutUsText = tw.h4`
   py-4
   text-base
   text-center
   tracking-wider
   text-white
   md:text-left	
`;

const AboutUsSvg = tw.div`
   mt-4
   w-11/12
   lg:pl-16	
`;

function AboutUs() {
  return (
    <AboutUsContainer name="About">
      <AboutUsContentWrapper>
        <TitleSectionSecondary title="About Us" />
        <AboutUsContentContainer>
          <AboutUsTextContainer>
            <AboutUsText>
              We are a team of professional's based in Europe. We've been living
              and breathing mobile since 2018.
            </AboutUsText>
            <AboutUsText>
              We pride ourselves on our excellent customer service. You will not
              walk the path to mobile success alone. We are here for you,
              guiding you along the way and offering our vast expertise starting
              from sketching an idea with pen and paper to implementing the best
              solution and celebrating success with you.
            </AboutUsText>
            <AboutUsText>
              In short, we are the kind of team who likes to focus on results,
              such as best user experience, engagement, user satisfaction,
              retention, and scalability.
            </AboutUsText>
          </AboutUsTextContainer>
          <AboutUsSvg>
            <img style={{ height: "100%" }} src={aboutSvg} alt="Service" />
          </AboutUsSvg>
        </AboutUsContentContainer>
      </AboutUsContentWrapper>
    </AboutUsContainer>
  );
}

export default AboutUs;
