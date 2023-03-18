import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import WeatherInfo from "../containers/WeatherInfo";
import Items from "./Items";

const RouterComponent = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/weather" element={<WeatherInfo />}></Route>
    <Route path="/error" element={<ErrorPage />}></Route>
    <Route path="/items" element={<Items />}></Route>
  </Routes>
);

const RouterExporter = (): JSX.Element => (
  <Router>
    <RouterComponent />
  </Router>
);

export default RouterExporter;
