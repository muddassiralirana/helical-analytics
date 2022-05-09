import React from "react";
import { Label, Input } from "reactstrap";

const UserRoles = () => {
  return (
    <div>
      <div className="d-flex flex-column">
        <Label check>
          <Input type="checkbox" name="check1" />
          Full
        </Label>
        <Label check>
          <Input type="checkbox" name="check1" />
          Trials
        </Label>
        <Label check>
          <Input type="checkbox" name="check1" />
          Folder
        </Label>
        <Label check>
          <Input type="checkbox" name="check1" />
          Analytics
        </Label>
        <Label check>
          <Input type="checkbox" name="check1" />
          Settings
        </Label>
        <Label check>
          <Input type="checkbox" name="check1" />
          Setup
        </Label>
        <Label check>
          <Input type="checkbox" name="check1" />
          Cloud
        </Label>
      </div>
    </div>
  );
};

export default UserRoles;
