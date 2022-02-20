import React from "react";
import tw from "twin.macro";

const BtnContainer = tw.button`
   w-11/12
   px-4
   py-4
   rounded-md
   border-2
   border-primary_blue-100
   bg-white  
   text-gray-700
   transition-colors
   transition-duration[300ms]
   hover:bg-primary_blue-100
   hover:border-white
   hover:text-white
   xl:w-72
`;

function ButtonSecondary({ text }) {
  return <BtnContainer>{text}</BtnContainer>;
}

export default ButtonSecondary;
