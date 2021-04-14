import React from "react";

const Video = (props) => {
  return (
    <li className="list-group-item">
      <img src={props.url} />
      <div className="mt-2">
        <h5>{props.title}</h5>
      </div>
    </li>
  );
};

export default Video;
