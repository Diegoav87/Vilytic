import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = (props) => {
  return (
    <div>
      <Bar
        data={{
          labels: props.labels,
          datasets: props.datasets,
        }}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default Chart;
