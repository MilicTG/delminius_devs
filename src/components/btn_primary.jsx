import React from "react";
import tw from "twin.macro";

const BtnContainer = tw.button`
   w-11/12
   px-4
   py-4
   rounded-md
   bg-primary_blue-100
   text-white
   transition-colors
   transition-duration[300ms]
   hover:bg-primary_blue-200
   xl:w-72
`;

function ButtonFull({ text }) {
  return <BtnContainer>{text}</BtnContainer>;
}

export default ButtonFull;
