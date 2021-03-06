import React from "react";
import Video from "../Video/Video";

const VideoList = (props) => {
  const videoList = props.videos.map((video) => {
    return (
      <Video
        sendId={props.sendId}
        setCurrent={props.setCurrent}
        url={video.thumbnail}
        title={video.title}
        key={video.id}
        id={video.id}
      />
    );
  });

  return (
    <div className="video-list-container">
      <ul className="list-group mt-4 mb-4">{videoList}</ul>
    </div>
  );
};

export default VideoList;
