import React from "react";
import { FooterContainer } from "./containers/footer";
import { JumbotronContainer } from "./containers/jumbotron";
// import "./App.scss";

export default function App() {
  return (
    <React.Fragment>
      <JumbotronContainer />
      <FooterContainer />
    </React.Fragment>
  );
}
