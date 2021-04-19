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
            <div className="d-flex w-100 justify-content-evenly p-2">
              <p>
                <i class="fas fa-eye"></i> {props.video.stats.views}
              </p>
              <p>
                <i class="fas fa-thumbs-up"></i> {props.video.stats.likes}
              </p>
              <p>
                <i class="fas fa-thumbs-down"></i> {props.video.stats.dislikes}
              </p>
              <p>
                <i class="fas fa-comments"></i> {props.video.stats.comments}
              </p>
            </div>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default VideoStats;
