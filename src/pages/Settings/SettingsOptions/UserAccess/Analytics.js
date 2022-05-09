import React from "react";
import { Label, Input } from "reactstrap";

const Analytics = () => {
  return (
    <div>
      <div className="d-flex flex-column">
        <Label check>
          <Input type="checkbox" name="check1" />
          Single Site
        </Label>
        <Label check>
          <Input type="checkbox" name="check1" />
          Single Modality
        </Label>
        <Label check>
          <Input type="checkbox" name="check1" />
          Multiple Sites
        </Label>
        <Label check>
          <Input type="checkbox" name="check1" />
          Multiple Modality
        </Label>
        <Label check>
          <Input type="checkbox" name="check1" />
          On / Off
        </Label>
      </div>
    </div>
  );
};

export default Analytics;
