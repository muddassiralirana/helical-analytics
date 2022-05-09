import React from "react";
import { Label, Input } from "reactstrap";

const SettingsPage = () => {
  return (
    <div>
      <div className="d-flex flex-column">
        <Label check>
          <Input type="checkbox" name="check1" />
          View Settings Page
        </Label>
        <Label check>
          <Input type="checkbox" name="check1" />
          View Analytics
        </Label>
        <Label check>
          <Input type="checkbox" name="check1" />
          View Folder Management
        </Label>
        <Label check>
          <Input type="checkbox" name="check1" />
          Turn on Cloud Sharing
        </Label>
        <Label check>
          <Input type="checkbox" name="check1" />
          Manage a Trial
        </Label>
        <Label check>
          <Input type="checkbox" name="check1" />
          Change default profile
        </Label>
        <Label check>
          <Input type="checkbox" name="check1" />
          Generate new key
        </Label>
        <Label check>
          <Input type="checkbox" name="check1" />
          More than 1 trial
        </Label>
      </div>
    </div>
  );
};

export default SettingsPage;
