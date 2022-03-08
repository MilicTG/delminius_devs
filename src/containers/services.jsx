import React from "react";
import tw from "twin.macro";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import { FaAndroid, FaReact } from "react-icons/fa";
import {
  MdDesignServices,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";

import ServicesCard from "../components/service_card";
import TitleSectionSecondary from "../components/title_section_secondary";

const ServicesContainer = tw(Element)`
  w-full
  bg-primary_blue-100
  flex
  flex-col
  items-center
`;

const ServicesContentWrapper = tw.div`
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
  const { t } = useTranslation();

  return (
    <ServicesContainer name="Services">
      <ServicesContentWrapper>
        <TitleSectionSecondary title={t("services.title")} />
        <CardContainer>
          <ServicesCard
            title={t("services.cardAndroidTitle")}
            text={t("services.cardAndroidText")}
          >
            <FaAndroid size="5rem" color="#84cc16" />
          </ServicesCard>

          <ServicesCard
            title={t("services.cardReactTitle")}
            text={t("services.cardReactText")}
          >
            <FaReact size="5rem" color="#0ea5e9" />
          </ServicesCard>

          <ServicesCard
            title={t("services.cardDesignTitle")}
            text={t("services.cardDesignText")}
          >
            <MdDesignServices size="5rem" color="#8b5cf6" />
          </ServicesCard>

          <ServicesCard
            title={t("services.cardMaintenanceTitle")}
            text={t("services.cardMaintenanceText")}
          >
            <MdOutlineMiscellaneousServices size="5rem" color="#14b8a6" />
          </ServicesCard>
        </CardContainer>
      </ServicesContentWrapper>
    </ServicesContainer>
  );
}

export default ServicesSection;
