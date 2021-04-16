import React from "react";

const Spinner = () => {
  return (
    <div
      className="spinner-border text-primary ml-auto mr-auto mt-4 center"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
