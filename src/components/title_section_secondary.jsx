import React from "react";
import tw from "twin.macro";

const TitleSectionContainer = tw.title`
   w-full
   flex
   flex-col
   justify-items-start
`;

const TitleSectionTitle = tw.h3`
   w-48
   text-3xl
   font-medium
   text-white
   pb-2
   border-b
   border-white
`;

function TitleSectionSecondary({ title }) {
  return (
    <TitleSectionContainer>
      <TitleSectionTitle>{title}</TitleSectionTitle>
    </TitleSectionContainer>
  );
}

export default TitleSectionSecondary;
