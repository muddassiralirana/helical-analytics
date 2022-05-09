import React from "react";
import { Label, Input } from "reactstrap";

const Trial = () => {
  return (
    <div>
      <div className="d-flex flex-column">
        <Label check>
          <Input type="checkbox" name="check1" />
          CoreLab
        </Label>
        <Label check>
          <Input type="checkbox" name="check1" />
          Participation Site
        </Label>
        <Label check>
          <Input type="checkbox" name="check1" />
          Participate with other CoreLabs
        </Label>
        <Label check>
          <Input type="checkbox" name="check1" />
          Participate in more Trials (CoreLabs for others)
        </Label>
      </div>

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
    </div>
  );
};

export default Trial;
