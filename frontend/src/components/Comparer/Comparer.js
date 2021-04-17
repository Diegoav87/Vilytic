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
        <VideoSearch id={0} />
        <div>
          <h3 className="ml-4 mr-4">VS</h3>
        </div>
        <VideoSearch id={1} />
      </div>
      <div className="card mt-5 mb-5">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li onClick={() => chartLinkClick("views")} className="nav-item">
              <button
                className={
                  currentChart === "views" ? "nav-link active" : "nav-link"
                }
              >
                Views
              </button>
            </li>
            <li onClick={() => chartLinkClick("likes")} className="nav-item">
              <button
                className={
                  currentChart === "likes" ? "nav-link active" : "nav-link"
                }
              >
                Likes and Dislikes
              </button>
            </li>
            <li onClick={() => chartLinkClick("comments")} className="nav-item">
              <button
                className={
                  currentChart === "comments" ? "nav-link active" : "nav-link"
                }
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
