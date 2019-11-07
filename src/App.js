import React from "react";

import Image from "./Image";
import logo from "./logo.svg";
import "./App.css";

const images = [
  {
    id: 1,
    fileName: "losc.png",
    title: "logo de l'équipte du LOSC",
    likes: 2
  },
  {
    id: 2,
    fileName: "lyon.png",
    title: "logo de l'équipe de Lyon",
    likes: 3
  }
];

function App() {
  return images.map(image => <Image key={image.id} {...image} />);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
