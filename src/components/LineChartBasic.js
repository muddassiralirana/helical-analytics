import React from "react";
import { Card, CardBody } from "reactstrap";
import ReactApexChart from "react-apexcharts";

const LineChartBasic = ({ height, xaxisData, yaxisData, name }) => {
  const series = [
    {
      name: "line chart",
      data: yaxisData,
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: xaxisData,
    },
  };
  return (
    <Card>
      <CardBody>
        <div>
          <h4 className="card-title mb-4">{name}</h4>
          <div id="line-column-chart" className="apex-charts" dir="ltr">
            <ReactApexChart
              options={options}
              series={series}
              type="line"
              height={height}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default LineChartBasic;
