import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 250px;
  height: 250px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 12px;
  padding: 0 5px;
`;

const Likes = styled.span`
  padding: 10px;
  font-size: 10px;
`;

const Button = styled.button`
  padding: 1px;
  height: 30px;
  width: 30px;
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
        <Img src={`http://localhost:3000/${fileName}`} />
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
