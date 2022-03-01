import React from "react";
import tw from "twin.macro";

const CardContainer = tw.div`
   w-full
   my-6
   py-8
   flex
   flex-col
   items-center
   bg-blue-50
   rounded-md
   shadow-lg
`;

const IconWrapper = tw.div`
   w-full
   pt-2
   flex
   justify-center
`;

const CardTitle = tw.h5`
   text-2xl
   text-gray-800
   font-medium
   pb-4
`;

const CardText = tw.p`
   text-gray-700
   whitespace-pre-wrap
   text-left
   px-4
   pt-2
   pb-4
`;

function ServicesCard({ title, text, children }) {
  return (
    <CardContainer>
      <IconWrapper>{children}</IconWrapper>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardContainer>
  );
}

export default ServicesCard;
