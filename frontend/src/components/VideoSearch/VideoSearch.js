import React, { useContext, useState } from "react";
const slugify = require("slugify");
import VideoStats from "../VideoStats/VideoStats";
import Spinner from "../Spinner/Spinner";
import VideoList from "../VideoList/VideoList";
import { ChartContext } from "../../context/Charts";

const VideoSearch = (props) => {
  const [query, setQuery] = useState("");

  const [videos, setVideos] = useState([]);
  const [videoStats, setVideoStats] = useState({});

  const [views, setViews] = useContext(ChartContext).views;
  const [likes, setLikes] = useContext(ChartContext).likes;
  const [dislikes, setDislikes] = useContext(ChartContext).dislikes;
  const [comments, setComments] = useContext(ChartContext).comments;

  const [searchById, setSearchById] = useState(false);
  const [videoId, setVideoId] = useState("");

  const [current, setCurrent] = useState("");

  const [loading, setLoading] = useState(false);

  const sendQuery = () => {
    setLoading(true);
    fetch(`http://127.0.0.1:8000/comparer/video-search?query=${slugify(query)}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setVideos(data["items"]);
      });
  };

  const sendId = (id) => {
    setLoading(true);
    fetch(`http://127.0.0.1:8000/comparer/video-id?id=${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setCurrent("error");
          setTimeout(() => {
            setCurrent(null);
          }, 3000);
        }
      })
      .then((data) => {
        console.log(data);
        setLoading(false);

        setViews(updateStats(views, data.stats.views, props.id));
        setLikes(updateStats(likes, data.stats.likes, props.id));
        setDislikes(updateStats(dislikes, data.stats.dislikes, props.id));
        setComments(updateStats(comments, data.stats.comments, props.id));

        setVideoStats(data);
      })
      .catch((err) => {
        console.log(err);
      });
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
          Video not found.
        </div>
      );
      break;
    default:
      currentComponent = null;
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

      {loading ? <Spinner /> : currentComponent}
    </div>
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
