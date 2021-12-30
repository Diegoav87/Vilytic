import React from "react";

const VideoStats = (props) => {
  return (
    <div>
      {props.video.thumbnail ? (
        <ul className="list-group mt-4 mb-4">
          <li className="list-group-item p-4 grid">
            <img className="m-auto video-img" src={props.video.thumbnail} />
            <div className="mt-4 mb-4">
              <h5>{props.video.title}</h5>
            </div>
          </li>
          <li className="list-group-item">
            <div className="stats-display">
              <p className="stat-text">
                <i className="fas fa-eye"></i> <span></span>
                {formatNumber(props.video.stats.views)}
              </p>
              <p className="stat-text">
                <i className="fas fa-thumbs-up"></i>{" "}
                {formatNumber(props.video.stats.likes)}
              </p>
              <p className="stat-text">
                <i className="fas fa-comments"></i>{" "}
                {formatNumber(props.video.stats.comments)}
              </p>
            </div>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export default VideoStats;
