import React from "react";
import ReactDOM from "react-dom";

function Movie() {
  return (
    <div className="App">
      <h1>Welcome,dear passenger</h1>
      <h2>Watch right now!</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/SUSSl5vO27k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      <iframe width="560" height="315" src="https://www.youtube.com/embed/C_nJJHaNmnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/SPfI2kWD1DY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/_5EkSF8-8o0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/07d2dXHYb94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      <iframe width="560" height="315" src="https://www.youtube.com/embed/j9fzP0Qn4hw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Movie />, rootElement);

export default Movie;