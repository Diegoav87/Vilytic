import React, { useState } from "react";
const slugify = require("slugify");
import Video from "../Video/Video";

const VideoSearch = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [showVideos, setShowVideos] = useState(false);
  const [videos, setVideos] = useState([]);

  const sendQuery = () => {
    setLoading(true);
    fetch(`http://127.0.0.1:8000/comparer/video-search?query=${slugify(query)}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setVideos(data["items"]);
        setShowVideos(true);
      });
  };

  const queryChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const searchButtonClick = () => {
    sendQuery();
  };

  let videoResults = null;

  if (loading) {
    videoResults = (
      <div
        className="spinner-border text-primary ml-auto mr-auto mt-4"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  } else {
    if (showVideos) {
      const videoList = videos.map((video) => {
        return (
          <Video url={video.thumbnail} title={video.title} key={video.id} />
        );
      });

      videoResults = <ul className="list-group mt-4 mb-4">{videoList}</ul>;
    } else {
      videoResults = null;
    }
  }

  return (
    <div className="w-100">
      <form className="d-none d-sm-inline-block form-inline mr-auto  navbar-search w-100">
        <div className="input-group">
          <input
            onChange={queryChange}
            type="text"
            className="form-control bg-white border-0 "
            placeholder="Search for video..."
            aria-label="Search"
          />
          <div className="input-group-append">
            <button
              onClick={searchButtonClick}
              className="btn btn-primary"
              type="button"
            >
              <i className="fas fa-search fa-sm"></i>
            </button>
          </div>
        </div>
      </form>

      {videoResults}
    </div>
  );
};

export default VideoSearch;
