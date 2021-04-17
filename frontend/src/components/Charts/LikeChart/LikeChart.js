import React, { useContext } from "react";
import Chart from "../Chart";
import { ChartContext } from "../../../context/Charts";

const LikeChart = () => {
  const [likes, setLikes] = useContext(ChartContext).likes;
  const [dislikes, setDislikes] = useContext(ChartContext).dislikes;

  const likeDataset = [
    {
      label: "Likes",
      data: likes,
      backgroundColor: "rgba(255, 159, 64, 0.2)",
      borderColor: "rgb(255, 159, 64)",
      borderWidth: 1,
    },
    {
      label: "Dislikes",
      data: dislikes,
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192)",
      borderWidth: 1,
    },
  ];

  return (
    <div className="card-body p-2">
      <Chart datasets={likeDataset} labels={["Video One", "Video Two"]} />
    </div>
  );
};

export default LikeChart;
