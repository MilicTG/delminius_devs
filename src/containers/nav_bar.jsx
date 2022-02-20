import React from "react";
import tw from "twin.macro";
import Logo from "../components/logo";
import NavItems from "../components/nav_items";

const NavContainer = tw.nav`container flex justify-between items-center h-24`;

function NavBar() {
  return (
    <NavContainer>
      <Logo />
      <NavItems />
    </NavContainer>
  );
}

export default NavBar;
