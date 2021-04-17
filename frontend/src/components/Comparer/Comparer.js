import React, { useContext } from "react";
import VideoSearch from "../VideoSearch/VideoSearch";
import ViewChart from "../Charts/Viewchart/ViewChart";

const Comparer = () => {
  return (
    <div>
      <div className="d-flex w-100 ml-auto mr-auto mb-4 mt-4">
        <VideoSearch id={0} />
        <div>
          <h3 className="ml-4 mr-4">VS</h3>
        </div>
        <VideoSearch id={1} />
      </div>
      <div className="card-group mt-5 mb-5">
        <ViewChart />
      </div>
    </div>
  );
};

export default Comparer;
