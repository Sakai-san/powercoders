import React from "react";
import styled from "styled-components";

import Image from "./Image";
import logo from "./logo.svg";
import "./App.css";

const Images = styled.div`
  display: flex;
  flex-wrap: row wrap;
`;

class App extends React.Component {
  state = {
    images: []
  };

  componentDidMount() {
    fetch(`http://localhost:3000/images/`)
      .then(res => res.json())
      .then(images => {
        this.setState({ images });
      });
  }

  render() {
    return (
      <Images>
        {this.state.images.map(image => (
          <Image key={image.id} {...image} />
        ))}
      </Images>
    );

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
}

export default App;
