import React from "react";
import { Label, Input } from "reactstrap";

const FolderManagement = () => {
  return (
    <div>
      <div className="d-flex flex-column">
        <Label check>
          <Input type="checkbox" name="check1" />
          Create Local
        </Label>
        <Label check>
          <Input type="checkbox" name="check1" />
          Share My Scans
        </Label>
        <Label check>
          <Input type="checkbox" name="check1" />
          Receive Scans
        </Label>
        <Label check>
          <Input type="checkbox" name="check1" />
          No Cloud Option
        </Label>
        <Label check>
          <Input type="checkbox" name="check1" />
          On / Off
        </Label>
      </div>
    </div>
  );
};

export default FolderManagement;
