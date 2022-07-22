import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components";
import Movie from "./components/movie";
import Safetyinstruction from "./components/safetyinstruction";
import Order from "./components/order";
import Rsurvey from "./components/Rsurvey";
import Coupon from "./components/coupon"

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Movie />} />
      <Route path="/order" element={<Order />} />
      <Route path="/safetyinstruction" element={<Safetyinstruction />} />
      <Route path="/coupon" element={<Coupon />} />
      <Route path="/survey" element={<Rsurvey />}></Route>

    </Routes>
  </Router>,

  document.getElementById("root")
);
