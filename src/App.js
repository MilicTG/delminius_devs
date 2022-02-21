import React from "react";
import tw from "twin.macro";
import Landing from "./containers/landing";

import NavBar from "./containers/nav_bar";
import ServicesSection from "./containers/services";

const AppContainer = tw.main`flex flex-col items-center w-full h-full bg-white`;

function App() {
  return (
    <AppContainer>
      <NavBar />
      <Landing />
      <ServicesSection />
    </AppContainer>
  );
}

export default App;
