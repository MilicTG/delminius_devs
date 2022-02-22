import React from "react";
import tw from "twin.macro";

const BtnContainer = tw.button`
   w-full
   px-4
   py-4
   rounded-md
   text-gray-700
   bg-white  
   text-gray-700
   transition-colors
   transition-duration[300ms]
   hover:bg-primary_red-100
   hover:text-white
   xl:w-72
`;

function ButtonContact({ text }) {
  return <BtnContainer>{text}</BtnContainer>;
}

export default ButtonContact;
