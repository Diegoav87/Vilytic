import React, { useState, createContext } from "react";

export const ChartContext = createContext();

export const ChartProvider = (props) => {
  const [views, setViews] = useState([]);
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);

  return (
    <ChartContext.Provider
      value={{
        views: [views, setViews],
        likes: [likes, setLikes],
        comments: [comments, setComments],
      }}
    >
      {props.children}
    </ChartContext.Provider>
  );
};
