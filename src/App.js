import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

import Routes from "./routes";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
      <GlobalStyles />
    </>
  );
}

export default App;
