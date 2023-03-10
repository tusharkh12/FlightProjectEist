import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            π©π©π©In-flight system (---Copyright 2022 :NullRivalException)π«π¬
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Movie
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/order">
                  Order
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/safetyinstruction">
                  Safety Instruction
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/survey">
                  Survey
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
