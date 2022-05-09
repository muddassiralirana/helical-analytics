import React from "react";
import { Label, Input } from "reactstrap";

const CloudSharing = () => {
  return (
    <div className="d-flex flex-column mt-3">
      <Label check>
        <Input type="radio" name="radio1" />
        On
      </Label>
      <Label check>
        <Input type="radio" name="radio1" />
        Off
      </Label>
    </div>
  );
};

export default CloudSharing;
