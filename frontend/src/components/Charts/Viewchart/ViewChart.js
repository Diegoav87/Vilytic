import React, { useContext } from "react";
import Chart from "../Chart";
import { ChartContext } from "../../../context/Charts";

const ViewChart = () => {
  const [views, setViews] = useContext(ChartContext).views;

  const viewsDataset = [
    {
      label: "Views",
      data: views,
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192)",
      borderWidth: 1,
    },
  ];

  return (
    <div className="card-body p-2">
      <Chart datasets={viewsDataset} labels={["Video One", "Video Two"]} />
    </div>
  );
};

export default ViewChart;
