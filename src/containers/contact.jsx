import React from "react";
import tw from "twin.macro";
import TitleSectionSecondary from "../components/title_section_secondary";

import contactSvg from "../assets/svg_contatc.svg";
import ButtonContact from "../components/btn_contact";

const ContactContainer = tw.section`
   w-full
   my-2
   px-4
   bg-primary_blue-100
   flex
   justify-center
   items-center
   lg:py-8
`;

const ContactWrapper = tw.div`
   container
   flex
   flex-col
   py-8
   mx-4
`;

const ContactComponentWrapper = tw.div`
  w-full
  flex
  flex-col
  items-center
  justify-between
  self-center
  md:flex-row
`;

const ContactFormWrapper = tw.div`
  w-full
  flex
  flex-col
  items-end
  md:ml-4
  xl:ml-6
  2xl:ml-24
`;

const ContactSmallInputWrapper = tw.div`
  w-full
  grid
  grid-rows-1
  gap-4
  md:grid-rows-none
  md:grid-cols-2
`;

const ContactSvg = tw.div`
  py-4
  w-full
`;

const SmallForm = tw.input`
  w-full
  bg-white
  px-4
  py-3
  block
  shadow 
  appearance-none 
  border-2
  text-sm
  text-gray-500
  focus:outline-none 
  focus:border-primary_blue-100
  leading-tight
  rounded-md
`;

const LargeForm = tw.textarea`
  w-full
  h-24
  my-4
  bg-white
  px-4
  py-3
  block
  shadow 
  appearance-none 
  border-2
  text-sm
  text-gray-500
  focus:outline-none 
  focus:border-primary_blue-100
  leading-tight
  rounded-md
`;

function ContactUs() {
  return (
    <ContactContainer>
      <ContactWrapper>
        <TitleSectionSecondary title="Contact Us" />

        <ContactComponentWrapper>
          <ContactSvg>
            <img style={{ height: "100%" }} src={contactSvg} alt="Contact" />
          </ContactSvg>
          <ContactFormWrapper>
            <ContactSmallInputWrapper>
              <SmallForm
                typeof="text"
                id="name"
                type="text"
                placeholder="First Name:"
              />
              <SmallForm
                typeof="text"
                id="name"
                type="text"
                placeholder="Last name:"
              />
              <SmallForm
                typeof="text"
                id="email"
                type="text"
                placeholder="E-mail:"
              />
              <SmallForm
                typeof="text"
                id="phone"
                type="text"
                placeholder="Phone or Skype ID:"
              />
            </ContactSmallInputWrapper>
            <LargeForm
              typeof="text"
              id="message"
              placeholder="Enter your message:"
            />
            <ButtonContact text="Send" onClick={() => {}} />
          </ContactFormWrapper>
        </ContactComponentWrapper>
      </ContactWrapper>
    </ContactContainer>
  );
}

export default ContactUs;
