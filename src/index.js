import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss";
import "assets/demo/demo.css";

import indexRoutes from "routes/index.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return (
          <Route path={prop.path} exact key={key} component={prop.component} />
        );
      })}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.register();
