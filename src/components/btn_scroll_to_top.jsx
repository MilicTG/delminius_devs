import React from "react";
import tw, { styled } from "twin.macro";
import { BiArrowToTop } from "react-icons/bi";

const BtnContainer = styled.button(({ show }) => [
  tw`
   hidden
  `,
  show &&
    tw`
   fixed 
   z-40 
   bottom-10 
   right-5  
   flex 
   justify-center 
   items-center 
   rounded-full
   w-12 
   h-12
   bg-primary_red-100   
   text-white
   transition-colors
   transition-duration[300ms]
   hover:bg-primary_red-200
   lg:bottom-24 
   lg:right-10
   `,
]);

function BtnToTop({ show, click }) {
  return (
    <BtnContainer onClick={click} show={show}>
      <BiArrowToTop size="1.5rem" className="text-white" />
    </BtnContainer>
  );
}

export default BtnToTop;
