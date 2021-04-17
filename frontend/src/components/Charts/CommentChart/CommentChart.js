import React, { useContext } from "react";
import Chart from "../Chart";
import { ChartContext } from "../../../context/Charts";

const CommentChart = () => {
  const [comments, setComments] = useContext(ChartContext).comments;

  const commentsDataset = [
    {
      label: "Comments",
      data: comments,
      backgroundColor: ["rgba(255, 159, 64, 0.2)"],
      borderColor: ["rgb(255, 159, 64)"],
      borderWidth: 1,
    },
  ];

  return (
    <div className="card-body p-2">
      <Chart datasets={commentsDataset} labels={["Video One", "Video Two"]} />
    </div>
  );
};

export default CommentChart;
