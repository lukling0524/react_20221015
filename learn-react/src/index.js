import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Accordion from "./components/UI/Accordion";
import { createGlobalStyle } from "styled-components";
// import Carousel from "./components/UI/Carousel";
import Scroll from "./components/UI/Scroll";
import { RecoilRoot } from "recoil";

const GlobalStyle = createGlobalStyle`

body{
  height: 300vh;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RecoilRoot>
        <GlobalStyle />
        {/* <Accordion /> */}
        {/* <Carousel /> */}
        <Scroll />
    </RecoilRoot>
);

reportWebVitals();
