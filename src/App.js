import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import tw from "twin.macro";
import BtnToTop from "./components/btn_scroll_to_top";

import AboutUs from "./containers/about";
import ContactUs from "./containers/contact";
import Footer from "./containers/footer";
import Landing from "./containers/landing";
import NavBar from "./containers/nav_bar";
import Portfolio from "./containers/portfolio";
import ServicesSection from "./containers/services";

import "./i18n";

const AppContainer = tw.main`flex flex-col items-center w-full h-full bg-white`;

function App() {
  const [returnToTopBtn, setReturnToTop] = useState(false);

  const showReturnToTopBtn = () => {
    if (window.scrollY >= 130) {
      setReturnToTop(true);
    } else {
      setReturnToTop(false);
    }
  };

  const returnToTop = () => {
    scroll.scrollToTop();
  };

  window.addEventListener("scroll", showReturnToTopBtn);

  return (
    <AppContainer>
      <BtnToTop show={returnToTopBtn} click={returnToTop} />
      <NavBar />
      <Landing />
      <AboutUs />
      <ServicesSection />
      <Portfolio />
      <ContactUs />
      <Footer />
    </AppContainer>
  );
}

export default App;
