import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../util/responsive";
import { Link } from "react-scroll";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";

const menuStyles = {
  bmBurgerButton: {
    position: "absolute",
    width: "20px",
    height: "20px",
    right: "20px",
    top: "40px",
  },
  bmBurgerBars: {
    background: "#1f2937",
  },
  bmBurgerBarsHover: {
    background: "#ffffff",
  },
  bmCrossButton: {
    height: "34px",
    width: "34px",
  },
  bmCross: {
    background: "#1f2937",
  },
  bmMenuWrap: {
    position: "fixed",
    width: "85%",
    height: "100%",
    top: "10px",
  },
  bmMenu: {
    background: "#ffffff",
    padding: "2.5em 1.5em 0 4.5em",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#ffffff",
  },
  bmItemList: {
    color: "#1f2937",
    padding: "2em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const NavItemsContainer = tw.div`
   w-full 
   h-full 
   flex 
   flex-row 
   items-center
   justify-end
   md:mr-4
   2xl:mr-0
   `;

const NavItemsWrapper = tw.ul`
    list-none
    h-auto
    lg:w-auto
    lg:h-full
    flex
    justify-around
    items-center
    self-center
`;

const NavItem = tw.li`
    md:ml-8
    flex
    items-center
    justify-center
    text-gray-700    
    cursor-pointer
    font-medium
    text-lg
    lg:text-base
    transition-colors
    transition-duration[300ms]
    hover:text-primary_blue-100
    box-content
`;

function NavItems() {
  const [menuOpenState, setMenuOpenState] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  const handleMenuOpenState = (state) => {
    setMenuOpenState(state);
  };

  const navItems = (
    <NavItemsWrapper>
      <NavItem>
        <Link
          onClick={() => handleMenuOpenState(false)}
          to="Home"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Home
        </Link>
      </NavItem>
      <NavItem>
        <Link
          onClick={() => handleMenuOpenState(false)}
          to="Services"
          activeClass="active"
          spy={true}
          smooth={"easeInOutQuad"}
          duration={1500}
          offset={-70}
        >
          Services
        </Link>
      </NavItem>
      <NavItem>
        <Link
          onClick={() => handleMenuOpenState(false)}
          to="About"
          activeClass="active"
          spy={true}
          smooth={"easeInOutQuad"}
          duration={1500}
          offset={-70}
        >
          About Us
        </Link>
      </NavItem>
      <NavItem>
        <Link
          onClick={() => handleMenuOpenState(false)}
          to="Projects"
          activeClass="active"
          spy={true}
          smooth={"easeInOutQuad"}
          duration={1500}
          offset={-70}
        >
          Projects
        </Link>
      </NavItem>
      <NavItem>
        <Link
          onClick={() => handleMenuOpenState(false)}
          to="Contact"
          activeClass="active"
          spy={true}
          smooth={"easeInOutQuad"}
          duration={1500}
          offset={-70}
        >
          Contact
        </Link>
      </NavItem>
    </NavItemsWrapper>
  );

  return (
    <NavItemsContainer>
      {isMobile && (
        <Menu
          right
          isOpen={menuOpenState}
          onOpen={() => handleMenuOpenState(true)}
          onClose={() => handleMenuOpenState(false)}
          styles={menuStyles}
        >
          {navItems}
        </Menu>
      )}
      {!isMobile && navItems}
    </NavItemsContainer>
  );
}

export default NavItems;
