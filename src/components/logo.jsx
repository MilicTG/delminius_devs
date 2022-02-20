import React from "react";
import tw from "twin.macro";

import delminiusLogo from "../assets/svg_logo.svg";

const LogoContainer = tw.div`px-4 h-3/5 flex flex-row items-center cursor-pointer`;
const LogoText = tw.p`hidden md:block m-0 text-2xl text-gray-700 px-4 font-medium`;

function Logo() {
  return (
    <LogoContainer>
      <img style={{ height: "100%" }} src={delminiusLogo} alt="Logo" />
      <LogoText>delminiusDevs</LogoText>
    </LogoContainer>
  );
}

export default Logo;
