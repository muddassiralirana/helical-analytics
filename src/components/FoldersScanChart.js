import React from "react";
import { Card, CardBody } from "reactstrap";
import ReactApexChart from "react-apexcharts";

const FoldersScanChart = ({
  name,
  xaxisData,
  yaxisData,
  type = "bar",
  height = "200",
  xaxisTitle = "",
  yaxisTitle = "",
}) => {
  const series = [
    {
      name: name,
      type: "column",
      data: yaxisData,
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: true,
      },
    },
    stroke: {
      width: [0, 3],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "20%",
      },
    },
    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    colors: ["#6BB4FF"],
    labels: xaxisData,
    xaxis: {
      title: {
        text: xaxisTitle,
      },
    },
    yaxis: {
      title: {
        text: yaxisTitle,
      },
    },
  };
  return (
    <Card>
      <CardBody>
        <h4 className="card-title mb-4">{name}</h4>
        <div id="line-column-chart" className="apex-charts" dir="ltr">
          <ReactApexChart
            options={options}
            series={series}
            type={type}
            height={height}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default FoldersScanChart;
