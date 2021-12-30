import React, { useContext, useState } from "react";
import VideoSearch from "../VideoSearch/VideoSearch";
import ViewChart from "../Charts/Viewchart/ViewChart";
import CommentChart from "../Charts/CommentChart/CommentChart";
import LikeChart from "../Charts/LikeChart/LikeChart";

const Comparer = () => {
  const [currentChart, setCurrentChart] = useState("views");

  const chartLinkClick = (chart) => {
    setCurrentChart(chart);
  };

  let chart = null;

  switch (currentChart) {
    case "views":
      chart = <ViewChart />;
      break;
    case "likes":
      chart = <LikeChart />;
      break;
    case "comments":
      chart = <CommentChart />;
      break;
    default:
      chart = null;
  }

  return (
    <div>
      <div className="searches-container w-100 ml-auto mr-auto mb-4 mt-4">
        <VideoSearch id={0} number="Video One" />
        <VideoSearch id={1} number="Video Two" />
      </div>
      <div className="card mt-5 mb-5 shadow-sm chart-container">
        <div className="card-header purple-color">
          <ul className="nav nav-tabs card-header-tabs">
            <li onClick={() => chartLinkClick("views")} className="nav-item">
              <button
                className={`nav-link text-white fw-bold chart-link ${currentChart === "views" ? "active" : ""
                  }`}
              >
                Views
              </button>
            </li>
            <li onClick={() => chartLinkClick("likes")} className="nav-item">
              <button
                className={`nav-link text-white fw-bold chart-link ${currentChart === "likes" ? "active" : ""
                  }`}
              >
                Likes
              </button>
            </li>
            <li onClick={() => chartLinkClick("comments")} className="nav-item">
              <button
                className={`nav-link text-white fw-bold chart-link ${currentChart === "comments" ? "active" : ""
                  }`}
              >
                Comments
              </button>
            </li>
          </ul>
        </div>

        {chart}
      </div>
    </div>
  );
};

export default Comparer;
