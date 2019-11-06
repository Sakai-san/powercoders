import React from "react";

const Image = ({ title, filename, likes }) => {
  return (
    <div>
      <img src={"../public/" + filename} />
      <h2>{title}</h2>
      <div>
        <button onClick={e => console.log("likes")} />
        {likes}
      </div>
    </div>
  );
};

export default Image;
