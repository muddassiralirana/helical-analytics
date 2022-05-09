import React from "react";
import { Card, CardBody } from "reactstrap";
import ReactApexChart from "react-apexcharts";

const LineChartDataLabels = ({ height, xaxisData, yaxisData, name }) => {
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
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: true,
      },
    },
    colors: ["#B8E9FF"],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    markers: {
      size: 1,
    },
    xaxis: {
      categories: xaxisData,
      title: {
        text: "Trials",
      },
    },
    yaxis: {
      title: {
        text: "Count",
      },
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

export default LineChartDataLabels;
