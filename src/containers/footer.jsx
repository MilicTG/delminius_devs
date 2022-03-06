import React from "react";
import tw from "twin.macro";
import { Link, scroller } from "react-scroll";
import ButtonSecondary from "../components/btn_secondary";
import { useTranslation } from "react-i18next";

import { FiInstagram, FiMail } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

import delminiusLogoSvg from "../assets/svg_logo.svg";

const FooterContainer = tw.footer`
   container
   px-4
   pt-8
   grid
   grid-rows-1
   gap-4
   items-center
   self-center
   md:grid-cols-2
   lg:grid-rows-none
   lg:grid-cols-2
   xl:grid-cols-4
`;

const FooterLogoWrapper = tw.div`
   h-full
   pt-4
   flex
   items-start
   justify-center
   xl:justify-self-start
`;

const FooterLogoContainer = tw.div`
   pb-8
   flex
   justify-center
   items-center
   lg:justify-items-start
   lg:justify-center
`;

const FooterLogo = tw.div`
   h-12
`;

const FooterLogoText = tw.p`
   m-0 
   text-2xl 
   text-gray-700 
   px-2 
   font-medium
`;

const FooterRightsText = tw.h6`
   text-gray-700 
   text-sm
   text-center
   py-8
   lg:text-left
`;

const FooterNavItems = tw.ul`
   list-none
   w-full
   h-auto
   flex
   flex-col
   justify-center
   items-center
   lg:items-start
`;

const FooterNavItem = tw.li`
   flex
   items-center
   justify-start
   min-h-full
   text-gray-700 
   cursor-pointer
   font-medium
   text-lg
   transition-colors
   transition-duration[300ms]
   hover:text-primary_blue-100
   box-content
   mb-2
`;

const FooterContactContainer = tw.div`
   flex
   flex-col
   justify-center
   items-center
   xl:items-start
`;

const FooterContactAndSocialTitle = tw.h4`
   py-4
   font-bold
   text-gray-700 
   text-2xl
`;

const ContactItems = tw.ul`
   w-full
   pb-4
   list-none
   h-auto
   flex
   flex-col
   justify-center
   items-center
   xl:items-start
`;

const ContactItem = tw.li`
   flex
   items-center
   justify-start
   min-h-full
   text-gray-700 
   text-base
   box-content
   mb-1
`;

const SocialWrapper = tw.div`
   w-full
   flex
   flex-col
   justify-center  
   items-center 
   xl:h-full
   xl:justify-between
   xl:items-end
`;

const SocialIconsWrapper = tw.div`
   w-full
   mt-4
   flex
   flex-row
   items-center
   justify-around
   xl:justify-end
`;

const scrollToContact = () => {
  scroller.scrollTo("Contact", {
    smooth: "easeInOutQuad",
    duration: 1500,
    offset: -70,
  });
};

const navigateToInstagram = () =>
  (window.location.href = "https://www.instagram.com/milic.dev/");

const navigateToGmail = () =>
  (window.location.href = "mailto:delminiusdevs@gmail.com");

const navigateToFacebook = () =>
  (window.location.href = "https://www.facebook.com/milic.tg/");

const navigateToLinkedin = () =>
  (window.location.href =
    "https://www.linkedin.com/in/ivan-mili%C4%87-1443024b/");

function Footer() {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterLogoWrapper>
        <FooterLogoContainer>
          <FooterLogo>
            <img style={{ height: "100%" }} src={delminiusLogoSvg} alt="Logo" />
          </FooterLogo>
          <FooterLogoText>delminiusDevs</FooterLogoText>
        </FooterLogoContainer>
      </FooterLogoWrapper>

      <FooterNavItems>
        <FooterNavItem>
          <Link to="Home">{t("nav.home")}</Link>
        </FooterNavItem>
        <FooterNavItem>
          <Link to="Services">{t("nav.services")}</Link>
        </FooterNavItem>
        <FooterNavItem>
          <Link to="About">{t("nav.about")}</Link>
        </FooterNavItem>
        <FooterNavItem>
          <Link to="Projects">{t("nav.projects")}</Link>
        </FooterNavItem>
        <FooterNavItem>
          <Link to="Contact">{t("nav.contact")}</Link>
        </FooterNavItem>
      </FooterNavItems>

      <FooterContactContainer>
        <FooterContactAndSocialTitle>
          {t("footer.office")}
        </FooterContactAndSocialTitle>

        <ContactItems>
          <ContactItem>{t("footer.adress")}</ContactItem>
          <ContactItem>{t("footer.city")}</ContactItem>
          <ContactItem>{t("footer.country")}</ContactItem>
          <ContactItem>{t("footer.email")}</ContactItem>
          <ContactItem>{t("footer.phone")}</ContactItem>
        </ContactItems>
        <ButtonSecondary
          text={t("landing.buttonOne")}
          onClick={scrollToContact}
        />
      </FooterContactContainer>

      <SocialWrapper>
        <FooterContactAndSocialTitle>
          {t("footer.social")}
        </FooterContactAndSocialTitle>
        <SocialIconsWrapper>
          <FiInstagram
            className="transition-duration[300ms] mr-2 cursor-pointer text-3xl text-gray-500 transition-colors hover:text-gray-200"
            onClick={navigateToInstagram}
          />
          <FiMail
            className="transition-duration[300ms] mr-2 cursor-pointer text-3xl text-gray-500 transition-colors hover:text-gray-200"
            onClick={navigateToGmail}
          />
          <FaFacebook
            className="transition-duration[300ms] mr-2 cursor-pointer text-3xl text-gray-500 transition-colors hover:text-gray-200"
            onClick={navigateToFacebook}
          />
          <ImLinkedin
            className="transition-duration[300ms] mr-2 cursor-pointer text-3xl text-gray-500 transition-colors hover:text-gray-200"
            onClick={navigateToLinkedin}
          />
        </SocialIconsWrapper>
      </SocialWrapper>
      <FooterRightsText>
        &copy; {new Date().getFullYear()} {t("footer.rights")}
      </FooterRightsText>
    </FooterContainer>
  );
}

export default Footer;
