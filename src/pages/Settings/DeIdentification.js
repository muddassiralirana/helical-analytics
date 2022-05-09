import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import CustomCards from "../../components/Common/CustomCards";
import ProfileSetting from "./SettingsOptions/DeIdentification/ProfileSetting";

const databaseData = [
  {
    id: 0,
    intent: "Profile Setting",
    firstIcon: "ri-user-fill",
  },
  {
    id: 1,
    intent: "Access Setting",
    firstIcon: " ri-fingerprint-fill",
  },
  {
    id: 2,
    intent: "Storage Setting",
    firstIcon: "ri-cloud-fill",
  },
  {
    id: 3,
    intent: "Scan Re-identification",
    firstIcon: "ri-scan-fill",
  },
];

const DeIdentification = () => {
  const [databaseSettings, setDatabaseSettings] = useState(0);

  let showSelectedSettings = () => <></>;
  
  if (databaseSettings === 0) {
    showSelectedSettings = <ProfileSetting />;
  } else if (databaseSettings === 1) {
    showSelectedSettings = <></>;
  }

  return (
    <div>
      <Row>
        <Col md={3}>
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

        <Col>{showSelectedSettings}</Col>
      </Row>
    </div>
  );
};

export default DeIdentification;
