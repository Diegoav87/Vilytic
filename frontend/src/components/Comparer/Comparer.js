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
      <div className="d-flex w-100 ml-auto mr-auto mb-4 mt-4">
        <ul className="list-group w-100 bg-white shadow-sm">
          <li className="list-group-item bg-light">
            <h5 className="text-primary fw-bold">Video One</h5>
          </li>
          <li className="list-group-item p-4">
            <VideoSearch id={0} />
          </li>
        </ul>

        <ul className="list-group w-100 bg-white shadow-sm">
          <li className="list-group-item bg-light">
            <h5 className="text-primary fw-bold">Video Two</h5>
          </li>
          <li className="list-group-item p-4">
            <VideoSearch id={1} />
          </li>
        </ul>
      </div>
      <div className="card mt-5 mb-5 shadow-sm">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li onClick={() => chartLinkClick("views")} className="nav-item">
              <button
                className={`nav-link text-primary ${
                  currentChart === "views" ? "active" : ""
                }`}
              >
                Views
              </button>
            </li>
            <li onClick={() => chartLinkClick("likes")} className="nav-item">
              <button
                className={`nav-link text-primary ${
                  currentChart === "likes" ? "active" : ""
                }`}
              >
                Likes and Dislikes
              </button>
            </li>
            <li onClick={() => chartLinkClick("comments")} className="nav-item">
              <button
                className={`nav-link text-primary ${
                  currentChart === "comments" ? "active" : ""
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
