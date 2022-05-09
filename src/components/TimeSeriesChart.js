import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody } from "reactstrap";

const TimeSeriesChart = ({ name, data, xaxisTitle = "", yaxisTitle = "" }) => {
  console.log(data);
  const getDates = (data = []) => {
    let ts2 = 1484418600000;
    var dates = [];

    for (var i = 0; i < data.length; i++) {
      console.log(data[i]["Date of Scan"]);
      ts2 = new Date(data[i]["Date of Scan"]);
      var innerArr = [ts2, data[i]["Scan / Series"]];
      dates.push(innerArr);
    }
    console.log(dates);
    return dates;
  };

  const [options] = useState({
    chart: {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom",
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      title: {
        text: yaxisTitle,
      },
    },
    xaxis: {
      type: "datetime",
      text: xaxisTitle,
    },
    tooltip: {
      shared: false,
    },
  });

  const [series] = useState([
    {
      name: name,
      data: getDates(data),
    },
  ]);
  return (
    <Card>
      <CardBody>
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height="320"
        />
      </CardBody>
    </Card>
  );
};

export default TimeSeriesChart;
