import Autos from "./select_page_simulator/autos.jsx";
import Pesados from "./select_page_simulator/pesados.jsx";
import Imoveis from "./select_page_simulator/imoveis.jsx";

import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";

import { Home } from "./home.jsx";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" exact element= {<Home/>}  />
      <Route path="/pesados" exact element = {<Pesados/>} />
      <Route path="/imoveis" exact element = {<Imoveis/>} />
      <Route path="/autos" exact element= {<Autos/>} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;
