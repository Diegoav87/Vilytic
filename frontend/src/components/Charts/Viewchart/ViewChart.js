import React, { useContext } from "react";
import Chart from "../Chart";
import { ChartContext } from "../../../context/Charts";

const ViewChart = () => {
  const [views, setViews] = useContext(ChartContext).views;

  const viewsDataset = [
    {
      label: "Views",
      data: views,
      backgroundColor: ["rgba(255, 159, 64, 0.2)"],
      borderColor: ["rgb(255, 159, 64)"],
      borderWidth: 1,
    },
  ];

  return (
    <div className="card p-5">
      <Chart datasets={viewsDataset} labels={["Video One", "Video Two"]} />
    </div>
  );
};

export default ViewChart;
