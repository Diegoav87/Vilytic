import React, { useState } from "react";
const slugify = require("slugify");
import VideoStats from "../VideoStats/VideoStats";
import Spinner from "../Spinner/Spinner";
import VideoList from "../VideoList/VideoList";

const VideoSearch = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [showVideos, setShowVideos] = useState(false);
  const [videos, setVideos] = useState([]);
  const [searchById, setSearchById] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [showStats, setShowStats] = useState(false);

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

    setVideoId(e.target.value);
    setQuery(e.target.value);
  };

  const searchButtonClick = () => {
    if (searchById) {
      setShowVideos(false);
      setShowStats(true);
    } else {
      sendQuery();
    }
  };

  const checkboxChange = (e) => {
    if (e.target.checked) {
      setSearchById(true);
    } else {
      setSearchById(false);
    }
  };

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
      <div className="form-check mt-2 ml-2">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          onChange={checkboxChange}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Search by video id
        </label>
      </div>

      {loading ? <Spinner /> : null}
      {showVideos ? <VideoList videos={videos} /> : null}
      {showStats ? <VideoStats id={videoId} /> : null}
    </div>
  );
};

export default VideoSearch;
