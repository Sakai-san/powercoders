import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  display: flex;
  margin: 10px 0;
  flex-direction: column;
`;

const Img = styled.img`
  width: 250px;
  height: 250px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 13px;
  padding: 5px 5px;
  max-width: 250px;
`;

const Likes = styled.span`
  padding: 10px;
  font-size: 10px;
`;

const Button = styled.button`
  padding: 1px;
  height: 30px;
  width: 30px;
  color: white;
  background-color: darkblue;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

class Image extends React.Component {
  state = {
    likes: this.props.likes
  };

  doLike = e => {
    fetch(`http://localhost:3000/image/like/${this.props.id}`, {
      method: "put"
    }).then(res => {
      this.setState(prevState => ({ likes: prevState.likes + 1 }));
    });
  };

  render() {
    const { title, fileName } = this.props;

    return (
      <ImageWrapper>
        <Img src={`http://localhost:3000/${fileName}`} alt={title} />
        <Title>{title}</Title>
        <div>
          <Button onClick={this.doLike}>Like</Button>
          <Likes>{this.state.likes}</Likes>
        </div>
      </ImageWrapper>
    );
  }
}

export default Image;
