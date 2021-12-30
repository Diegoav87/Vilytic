import React, { useContext, useState } from "react";
const slugify = require("slugify");
import VideoStats from "../VideoStats/VideoStats";
import Spinner from "../Spinner/Spinner";
import VideoList from "../VideoList/VideoList";
import { ChartContext } from "../../context/Charts";

import axiosInstance from '../../helpers/axios';
import handleError from "../../helpers/axiosErrorHandler";

const VideoSearch = (props) => {
  const [query, setQuery] = useState("");

  const [videos, setVideos] = useState([]);
  const [videoStats, setVideoStats] = useState({});

  const [views, setViews] = useContext(ChartContext).views;
  const [likes, setLikes] = useContext(ChartContext).likes;
  const [comments, setComments] = useContext(ChartContext).comments;

  const [searchById, setSearchById] = useState(false);
  const [videoId, setVideoId] = useState("");

  const [current, setCurrent] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const sendQuery = () => {
    setLoading(true);

    axiosInstance
      .get(`https://vilytic.herokuapp.com/video-search?query=${slugify(
        query
      )}`)
      .then(res => {
        console.log(res.data);
        setVideos(res.data["items"]);
        setLoading(false);
      })
      .catch(err => {
        handleError(err);
        setLoading(false);
      })
  };

  const sendId = (id) => {
    setLoading(true);

    axiosInstance
      .get(`https://vilytic.herokuapp.com/comparer/video-id?id=${id}`)
      .then(res => {
        console.log(res.data);
        setViews(updateStats(views, res.data.stats.views, props.id));
        setLikes(updateStats(likes, res.data.stats.likes, props.id));
        setComments(updateStats(comments, res.data.stats.comments, props.id));
        setVideoStats(res.data);
        setLoading(false);
      })
      .catch(err => {
        handleError(err);
        setLoading(false);
      })
  };

  const queryChange = (e) => {
    e.preventDefault();

    setVideoId(e.target.value);
    setQuery(e.target.value);
    setCurrent(null);
  };

  const searchButtonClick = () => {
    if (searchById) {
      sendId(videoId);
      setCurrent("stats");
    } else {
      sendQuery();
      setCurrent("videos");
    }
  };

  const checkboxChange = (e) => {
    if (e.target.checked) {
      setSearchById(true);
    } else {
      setSearchById(false);
    }
  };

  let currentComponent = null;

  switch (current) {
    case "videos":
      currentComponent = (
        <VideoList videos={videos} sendId={sendId} setCurrent={setCurrent} />
      );
      break;
    case "stats":
      currentComponent = <VideoStats video={videoStats} />;
      break;
    case "error":
      currentComponent = (
        <div className="alert alert-danger mt-2" role="alert">
          {error}
        </div>
      );
      break;
    default:
      currentComponent = null;
  }

  return (
    <ul className="search-ul">
      <li className="list-group-item video-header-item">
        <h5 className="text-white fw-bold">{props.number}</h5>
      </li>
      <li className="list-group-item p-4">
        <div className="w-100">
          <form className="d-none d-sm-inline-block form-inline mr-auto  navbar-search w-100">
            <div className="input-group">
              <input
                onChange={queryChange}
                type="text"
                className="form-control bg-light border-0 "
                placeholder="Search for video..."
                aria-label="Search"
              />
              <div className="input-group-append">
                <button
                  onClick={searchButtonClick}
                  className="btn search-btn"
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
          <div className="grid">{loading ? <Spinner /> : currentComponent}</div>
        </div>
      </li>
    </ul>
  );
};

function updateStats(stats, newStat, id) {
  const newStats = [...stats];

  if (newStats.length === 0) {
    newStats[id] = newStat;
    return newStats;
  }

  newStats.splice(id, 1);
  newStats.splice(id, 0, newStat);
  return newStats;
}

export default VideoSearch;
