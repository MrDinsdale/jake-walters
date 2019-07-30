import React from "react";
import { render } from "react-dom";

import { App } from "./containers/app";
import "../stylesheets/app.scss";

if (module.hot) {
  module.hot.accept("./containers/app", () => {
    render(App);
    render(require("./containers/app"));
  });
}

render(<App />, document.getElementById("app"));
