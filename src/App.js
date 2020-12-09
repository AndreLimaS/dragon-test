import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Login from "./pages/Login";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Header />
      <Login />
      <Footer />
      <GlobalStyles />
    </>
  );
}

export default App;
