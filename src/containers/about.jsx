import React from "react";
import tw from "twin.macro";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

import aboutSvg from "../assets/svg_about.svg";
import TitleSection from "../components/title_section";

const AboutUsContainer = tw(Element)`
   w-full
   my-2
   px-4
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
  whitespace-pre-wrap
  py-4
  text-base
  text-center
  tracking-wider
  text-gray-700
  md:text-left	
`;

const AboutUsSvg = tw.div`
   mt-4
   w-11/12
   lg:pl-16	
`;

function AboutUs() {
  const { t } = useTranslation();

  return (
    <AboutUsContainer name="About">
      <AboutUsContentWrapper>
        <TitleSection title={t("about.title")} />
        <AboutUsContentContainer>
          <AboutUsTextContainer>
            <AboutUsText>{t("about.text")}</AboutUsText>
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
