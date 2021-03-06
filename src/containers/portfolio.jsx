import React from "react";
import tw from "twin.macro";
import TitleSection from "../components/title_section";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

import radio_tg_img from "../assets/img_portfolio_rtg.jpg";
import radio_tg_app_img from "../assets/img_portfolio_rtg_app.jpg";
import elektra_img from "../assets/img_portfolio_elektra.jpg";

const PortfolioContainer = tw(Element)`
   container
   flex
   flex-col
   pt-20
   pb-10
   lg:py-16
`;

const PortfolioContent = tw.div`
   flex
   flex-col
   px-4
`;

const PortfolioCardsWrapper = tw.div`
   w-full
   mt-16
   mb-16
   grid
   grid-rows-3
   gap-4
   justify-items-center
   md:grid-rows-none
   md:grid-cols-3
`;

const PortfolioCardWrapper = tw.div`
   flex
   flex-col
   justify-items-center
   justify-center
`;

const PortfolioProjectTitle = tw.h5`
   pt-2
   pb-4 
   flex
   flex-col
   text-gray-700
   text-sm
   text-center
   font-medium
`;

const PortfolioCard = tw.div`
   w-72
   h-72
   rounded-md
   drop-shadow-md	
   overflow-hidden
   cursor-pointer
   md:w-56
   md:h-56
   lg:w-80
   lg:h-80
`;

const navigateToRadioSite = () =>
  (window.location.href = "http://www.radiotg.com");

const navigateToPlayStoreRTG = () =>
  (window.location.href =
    "https://play.google.com/store/apps/details?id=com.milictg.radiotg");

function Portfolio() {
  const { t } = useTranslation();

  return (
    <PortfolioContainer name="Projects">
      <PortfolioContent>
        <TitleSection title={t("work.title")} />

        <PortfolioCardsWrapper>
          <PortfolioCardWrapper>
            <PortfolioCard className="group" onClick={navigateToRadioSite}>
              <img
                className="transition-duration[300ms] transition-all hover:scale-105"
                style={{ height: "100%", width: "100%" }}
                src={radio_tg_img}
                alt="Logo"
              />
            </PortfolioCard>
            <PortfolioProjectTitle>
              {t("work.projectOne")}
            </PortfolioProjectTitle>
          </PortfolioCardWrapper>

          <PortfolioCardWrapper>
            <PortfolioCard className="group" onClick={navigateToPlayStoreRTG}>
              <img
                className="transition-duration[300ms] transition-all hover:scale-105"
                style={{ height: "100%", width: "100%" }}
                src={radio_tg_app_img}
                alt="Logo"
              />
            </PortfolioCard>
            <PortfolioProjectTitle>
              {t("work.projectTwo")}
            </PortfolioProjectTitle>
          </PortfolioCardWrapper>

          <PortfolioCardWrapper>
            <PortfolioCard className="group">
              <img
                className="transition-duration[300ms] transition-all hover:scale-105"
                style={{ height: "100%", width: "100%" }}
                src={elektra_img}
                alt="Logo"
              />
            </PortfolioCard>
            <PortfolioProjectTitle>
              {t("work.projectThree")}
            </PortfolioProjectTitle>
          </PortfolioCardWrapper>
        </PortfolioCardsWrapper>
      </PortfolioContent>
    </PortfolioContainer>
  );
}

export default Portfolio;
