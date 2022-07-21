import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SearchResult from "./pages/SearchResult";
import React from "react";
import Details from "./pages/Details";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/search" element={<SearchResult />} />
            <Route exact path="/info" element={<Details />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
