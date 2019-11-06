import React from "react";

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
    const { title, filename } = this.props;

    return (
      <div>
        <img src={"../public/" + filename} />
        <h2>{title}</h2>
        <div>
          <button onClick={this.doLike} />
          {this.state.likes}
        </div>
      </div>
    );
  }
}

export default Image;
