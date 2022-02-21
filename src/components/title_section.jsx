import React from "react";
import tw from "twin.macro";

const TitleSectionContainer = tw.title`
   w-full
   flex
   flex-col
   justify-items-start
`;

const TitleSectionTitle = tw.h3`
   w-44
   text-3xl
   font-medium
   text-gray-700
   pb-2
   border-b
   border-primary_blue-100
`;

function TitleSection({ title }) {
  return (
    <TitleSectionContainer>
      <TitleSectionTitle>{title}</TitleSectionTitle>
    </TitleSectionContainer>
  );
}

export default TitleSection;
