import React from "react";

class Image extends React.Component {
  state = {
    likes: this.props.likes
  };

  doLike = e => {
    fetch(`http://localhost/image/like/${this.props.id}`, {
      method: "put"
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          console.log("res", res);
          this.setState(prevState => ({ likes: prevState.likess + 1 }));
        }
      })
      .catch(error => console.log("error", error));
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
