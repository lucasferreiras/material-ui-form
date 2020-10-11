import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./Components/Login/Login";
import Perfil from "./Components/Perfil/Perfil";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/perfil" component={Perfil} />
    </BrowserRouter>
  );
}

export default Routes;
