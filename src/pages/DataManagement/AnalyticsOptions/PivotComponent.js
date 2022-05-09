import React, { useState } from "react";
import { CardBody } from "reactstrap";
import PivotTableUI from "react-pivottable/PivotTableUI";
import "react-pivottable/pivottable.css";
import TableRenderers from "react-pivottable/TableRenderers";
import Plot from "react-plotly.js";
import createPlotlyRenderers from "react-pivottable/PlotlyRenderers";

// create Plotly renderers via dependency injection
const PlotlyRenderers = createPlotlyRenderers(Plot);

// see documentation for supported input formats
// https://github.com/plotly/react-pivottable#readme

const PivotComponent = ({ allSelection }) => {
  const formattedData = (data) => {
    let formattedData = {};
    for (let item of data) {
      for (let child of item.child) {
        formattedData[child.value] = child.value;
      }
    }
    return [formattedData];
  };

  const [state, setState] = useState();
  const dataToShow = formattedData(allSelection);
  return (
    <CardBody>
      <PivotTableUI
        data={dataToShow}
        onChange={(s) => setState(s)}
        renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
        {...state}
      />
    </CardBody>
  );
};

export default PivotComponent;
