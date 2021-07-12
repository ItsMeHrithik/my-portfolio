import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";

const App = () => {
  return (
    <div>
      <h1>Welcome to my portfolio</h1>
      <GlobalStyle />
      <AboutUs />
    </div>
  );
};

export default App;
