import React from "react";

const VideoStats = (props) => {
  return (
    <div>
      {props.video.thumbnail ? (
        <ul className="list-group mt-4 mb-4">
          <li className="list-group-item p-4">
            <img className="m-auto" src={props.video.thumbnail} />
            <div className="mt-4 mb-4">
              <h5>{props.video.title}</h5>
            </div>
          </li>
          <li className="list-group-item">
            <p>Views - {props.video.stats.views}</p>
            <p>Likes- {props.video.stats.likes}</p>
            <p>Dislikes - {props.video.stats.dislikes}</p>
            <p>Comments - {props.video.stats.comments}</p>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default VideoStats;
