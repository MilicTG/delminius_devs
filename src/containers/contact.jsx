import React, { useState } from "react";
import { app } from "../firebase/firebaseConfig";
import tw from "twin.macro";
import TitleSectionSecondary from "../components/title_section_secondary";
import { Element } from "react-scroll";
import Axios from "axios";

import contactSvg from "../assets/svg_contatc.svg";
import ButtonContact from "../components/btn_contact";

const ContactContainer = tw(Element)`
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

const ContactFormWrapper = tw.form`
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
  py-5
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
  h-32
  my-4
  bg-white
  px-4
  py-5
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
  const [formData, setFormData] = useState({});

  const updateInputName = (e) => {
    setFormData({
      name: e.target.value,
      ...formData,
    });
  };

  const updateInputEmail = (e) => {
    setFormData({
      email: e.target.value,
      ...formData,
    });
  };

  const updateInputMessage = (e) => {
    setFormData({
      message: e.target.value,
      ...formData,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const sendEmail = () => {
    Axios.post("https://delminiusdevs.cloudfunctions.net/submit", formData)
      .then((res) => {
        app.collection("emails").add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ContactContainer name="Contact">
      <ContactWrapper>
        <TitleSectionSecondary title="Contact Us" />

        <ContactComponentWrapper>
          <ContactSvg>
            <img style={{ height: "100%" }} src={contactSvg} alt="Contact" />
          </ContactSvg>
          <ContactFormWrapper onSubmit={handleSubmit}>
            <ContactSmallInputWrapper>
              <SmallForm
                onChange={updateInputName}
                value={formData.name || ""}
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
                onChange={updateInputEmail}
                value={formData.email || ""}
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
              onChange={updateInputMessage}
              value={formData.message || ""}
              typeof="text"
              id="message"
              placeholder="Enter your message:"
            />
            <ButtonContact
              text="Send"
              onClick={(event) => {
                handleSubmit(event);
              }}
            />
          </ContactFormWrapper>
        </ContactComponentWrapper>
      </ContactWrapper>
    </ContactContainer>
  );
}

export default ContactUs;
