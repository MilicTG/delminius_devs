import React from "react";
import tw from "twin.macro";
import { Element } from "react-scroll";

import { FaAndroid, FaReact } from "react-icons/fa";
import {
  MdDesignServices,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";

import ServicesCard from "../components/service_card";
import TitleSection from "../components/title_section";

import {
  cardAndroidDevText,
  cardReactDevText,
  cardDesignDevText,
  cardMaintenanceDevText,
} from "../data/services_card_text.js";

const ServicesContainer = tw(Element)`
   container
   px-4
   my-8
   flex
   flex-col
   items-center
   lg:py-16
`;

const CardContainer = tw.div`
  w-full
  grid
  grid-cols-1
  grid-rows-4
  my-6
  gap-8
  md:grid-cols-2
  md:grid-rows-2
  xl:grid-cols-4
  xl:grid-rows-1
`;

function ServicesSection() {
  return (
    <ServicesContainer name="Services">
      <TitleSection title="Our Services" />
      <CardContainer>
        <ServicesCard
          title={cardAndroidDevText.title}
          text={cardAndroidDevText.text}
        >
          <FaAndroid size="5rem" color="#84cc16" />
        </ServicesCard>

        <ServicesCard
          title={cardReactDevText.title}
          text={cardReactDevText.text}
        >
          <FaReact size="5rem" color="#0ea5e9" />
        </ServicesCard>

        <ServicesCard
          title={cardDesignDevText.title}
          text={cardDesignDevText.text}
        >
          <MdDesignServices size="5rem" color="#8b5cf6" />
        </ServicesCard>

        <ServicesCard
          title={cardMaintenanceDevText.title}
          text={cardMaintenanceDevText.text}
        >
          <MdOutlineMiscellaneousServices size="5rem" color="#14b8a6" />
        </ServicesCard>
      </CardContainer>
    </ServicesContainer>
  );
}

export default ServicesSection;
