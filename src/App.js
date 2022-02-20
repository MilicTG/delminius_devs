import React from "react";
import tw from "twin.macro";

import NavBar from "./containers/nav_bar";

const AppContainer = tw.main`flex flex-col items-center w-full h-full bg-white`;

function App() {
  return (
    <AppContainer>
      <NavBar />
    </AppContainer>
  );
}

export default App;
