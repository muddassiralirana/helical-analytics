import React, { useState } from "react";
import { Label, FormGroup, Col, Row, Card } from "reactstrap";
import CustomCards from "../../components/Common/CustomCards";

const sharedFoldersOptions = {
  Remove_Access: "Remove_Access",
  Edit_Access: "Edit_Access",
  Add_Access: "Add_Access",
  View_Access: "View_Access",
  Create_New_Folder: "Create_New_Folder",
  Manage_Trial: "Manage_Trial",
};

const sharedFoldersData = [
  {
    id: sharedFoldersOptions.Remove_Access,
    intent: "Remove Access",
    firstIcon: "ri-close-circle-fill",
  },
  {
    id: sharedFoldersOptions.Edit_Access,
    intent: "Edit Access",
    firstIcon: "ri-edit-fill",
  },
  {
    id: sharedFoldersOptions.Add_Access,
    intent: "Add Access",
    firstIcon: "ri-add-circle-fill",
  },
  {
    id: sharedFoldersOptions.View_Access,
    intent: "View Access",
    firstIcon: "ri-eye-fill",
  },
  {
    id: sharedFoldersOptions.Create_New_Folder,
    intent: "Create New Folder",
    firstIcon: "ri-folder-add-fill",
  },
  {
    id: sharedFoldersOptions.Manage_Trial,
    intent: "Manage Trial",
    firstIcon: "ri-dashboard-fill",
  },
];

const SharedFolder = () => {
  const [sharedAccessSettings, setSharedAccessSettings] = useState(
    sharedFoldersOptions.Remove_Access
  );

  let showSelectedSettings = () => <></>;
  return (
    <div>
      <FormGroup row>
        <Label className="col-md-4 col-form-label">
          Shared Folder Settings:{" "}
        </Label>
        <Col md={6}>
          <select className="form-control">
            <option>Select</option>
            <option>Profile Settings</option>
            <option>Access Settings</option>
            <option>Storage Settings</option>
            <option>Scan Re-identification (Off by Default)</option>
            <option>Label</option>
            <option>Label</option>
          </select>
        </Col>
      </FormGroup>
      <Row>
        <Col md={4}>
          {sharedFoldersData.map((setting) => (
            <CustomCards
              key={setting.id}
              firstIcon={setting.firstIcon}
              intent={setting.intent}
              onClick={() => setSharedAccessSettings(setting.id)}
              clicked={sharedAccessSettings === setting.id}
            />
          ))}
        </Col>

        <Col>
          <Card
            style={{ height: "35vh", padding: "20px", paddingLeft: "40px" }}
          >
            {showSelectedSettings}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SharedFolder;
