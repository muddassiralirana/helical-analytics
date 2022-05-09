import React, { useState } from "react";
import { Row, Col, Card } from "reactstrap";
import CustomCards from "../../components/Common/CustomCards";
import Options from "./SettingsOptions/DatabaseSettings/Options";
import Variables from "./SettingsOptions/DatabaseSettings/Variables";

const databaseData = [
  {
    id: 0,
    intent: "Options",
    firstIcon: "ri-toggle-fill",
  },
  {
    id: 1,
    intent: "Variables",
    firstIcon: "ri-settings-2-fill",
  },
];

const DatabaseSettings = () => {
  const [databaseSettings, setDatabaseSettings] = useState();

  let showSelectedSettings = () => <></>;
  if (databaseSettings === 0) {
    showSelectedSettings = <Options />;
  } else if (databaseSettings === 1) {
    showSelectedSettings = <Variables />;
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
            style={{ height: "35vh", padding: "20px", paddingLeft: "40px" }}
          >
            {showSelectedSettings}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DatabaseSettings;
