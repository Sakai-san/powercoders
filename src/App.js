import React from "react";
import styled from "styled-components";

import Image from "./Image";

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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
  }
}

export default App;
