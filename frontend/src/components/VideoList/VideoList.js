import React from "react";
import Video from "../Video/Video";

const VideoList = (props) => {
  const videoList = props.videos.map((video) => {
    return <Video url={video.thumbnail} title={video.title} key={video.id} />;
  });

  return (
    <div>
      <ul className="list-group mt-4 mb-4">{videoList}</ul>
    </div>
  );
};

export default VideoList;
