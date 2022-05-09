import React, { useState } from "react";
import SetupNewQuery from "./SettingsOptions/PACS/SetupNewQuery"
import AddNode from "./SettingsOptions/PACS/AddNode"
import { Row, Col, Card } from "reactstrap";
import CustomCards from "../../components/Common/CustomCards";

const databaseData = [
  {
    id: 0,
    intent: "Setup New Query",
    firstIcon: " ri-radio-button-line",
  },
  {
    id: 1,
    intent: "Add a Node",
    firstIcon: " ri-radio-button-line",
  },
  {
    id: 2,
    intent: "View Node",
    firstIcon: " ri-radio-button-line",
  },
  {
    id: 3,
    intent: "Edit Node Destination",
    firstIcon: " ri-radio-button-line",
  },
];

const PACS = () => {
  const [databaseSettings, setDatabaseSettings] = useState(0);

  let showSelectedSettings = () => <SetupNewQuery/>;
  if (databaseSettings === 0) {
    showSelectedSettings = <SetupNewQuery />;
  } else if (databaseSettings === 1) {
    showSelectedSettings = <AddNode/>;
  }

  return (
    <div>
      <Row>
        <Col md={4}>
          {databaseData.map((setting) => (
            <CustomCards
              key={setting.id}
              firstIcon={setting.firstIcon}
              intent={setting.intent}
              onClick={() => setDatabaseSettings(setting.id)}
              clicked={databaseSettings === setting.id}
            />
          ))}
        </Col>
        <Col>
          <Card
            style={{ padding: "20px", paddingLeft: "40px" }}
          >
            {showSelectedSettings}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PACS;
