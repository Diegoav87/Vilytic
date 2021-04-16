import React, { useState } from "react";
import VideoSearch from "../VideoSearch/VideoSearch";

const Comparer = () => {
  return (
    <div>
      <div className="d-flex w-100 ml-auto mr-auto mb-4 mt-4">
        <VideoSearch />
        <div>
          <h3 className="ml-4 mr-4">VS</h3>
        </div>
        <VideoSearch />
      </div>
    </div>
  );
};

export default Comparer;
