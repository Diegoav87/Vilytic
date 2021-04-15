import React from "react";

const Video = (props) => {
  return (
    <li className="list-group-item p-4">
      <img className="m-auto" src={props.url} />
      <div className="mt-4 mb-4">
        <h5>{props.title}</h5>
      </div>
    </li>
  );
};

export default Video;
