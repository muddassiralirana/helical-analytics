import React from "react";
import LineChartBasic from "../../../components/LineChartBasic";
import { Row, Col } from "reactstrap";
import FoldersScanChart from "../../../components/FoldersScanChart";
import LineChartDataLabels from "../../../components/LineChartDataLabels";
import TimeLineChart from "../../../components/TimelineChart";

export const MainSelected = [
  { index: 1, name: "My Teaching Cases", number: 478, count: 1000 },
  { index: 2, name: "My Research Analysis", number: 473, count: 200 },
  { index: 3, name: "My CT Scans", number: 470, count: 300 },
  { index: 4, name: "My work", number: 37, count: 300 },
  { index: 5, name: "Label", number: 417, count: 400 },
  { index: 6, name: "Label", number: 437, count: 600 },
  { index: 7, name: "Label", number: 3427, count: 200 },
  { index: 8, name: "Label", number: 4137, count: 600 },
  { index: 9, name: "Label", number: 47, count: 800 },
  { index: 10, name: "Label", number: 437, count: 900 },
  { index: 11, name: "Label", number: 47, count: 100 },
  { index: 12, name: "Label", number: 147, count: 200 },
];

export const ChildSelected = [
  { index: 0, name: "Cardiac MR", number: "47", extra: "Shared", count: 1000 },
  { index: 1, name: "Cardiac CT", number: "16", count: 2000 },
  { index: 2, name: "Cardiac Echo", number: "Insert value", count: 3000 },
  { index: 3, name: "Child Folder Name", number: "Insert value", count: 100 },
  { index: 4, name: "Label", number: "Insert value", count: 100 },
  { index: 5, name: "Label", number: "Insert value", count: 200 },
  { index: 6, name: "Label", number: "Insert value", count: 1300 },
  { index: 7, name: "Label", number: "Insert value", count: 1500 },
  { index: 8, name: "Label", number: "Insert value", count: 100 },
  { index: 9, name: "Label", number: "Insert value", count: 2000 },
  { index: 10, name: "Label", number: "Insert value", count: 1300 },
  { index: 11, name: "Label", number: "Insert value", count: 1060 },
];

const Analysis = () => {
  const xaxisData = ChildSelected.map((folders) => folders.name);
  const yaxisData = ChildSelected.map((folders) => folders.count);
  return (
    <div>
      <Row>
        <Col md={6}>
          <FoldersScanChart
            height="300"
            name="Selected Folders Trials Count"
            xaxisData={xaxisData}
            yaxisData={yaxisData}
          />
        </Col>
        <Col md={6}>
          <LineChartBasic
            height="300"
            name="Selected Folders Trials Count"
            xaxisData={xaxisData}
            yaxisData={yaxisData}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <LineChartDataLabels
            height="300"
            name="Selected Folders Trials Count"
            xaxisData={MainSelected.map((folders) => folders.name)}
            yaxisData={MainSelected.map((folders) => folders.count)}
          />
        </Col>
      </Row>

      <TimeLineChart />
    </div>
  );
};

export default Analysis;
