import React, { useState } from "react";
import { Row, Col, Card } from "reactstrap";
import CustomCards from "../../../../components/Common/CustomCards";
import SettingsTable from "../../../../components/SettingsTable/SettingsTable";
import AssignAProfile from "./AssignAProfile";
import EditProfile from "./EditProfile";
import CreateNewProfile from "./CreateNewProfile";
import ProfileStatistics from "./ProfileStatistics";

const databaseData = [
  {
    id: 0,
    intent: "Edit a Default Profile",
    firstIcon: "ri-profile-fill",
  },
  {
    id: 1,
    intent: "Assign a Profile",
    firstIcon: "ri-share-box-line",
  },
  {
    id: 2,
    intent: "Create a New Profile",
    firstIcon: "ri-add-circle-fill",
  },
  {
    id: 3,
    intent: "View Profile Statistics",
    firstIcon: "ri-bar-chart-box-fill",
  },
];

const ProfileSetting = () => {
  const [databaseSettings, setDatabaseSettings] = useState(0);
  let showSelectedSettings = () => <></>;

  if (databaseSettings === 0) {
    showSelectedSettings = <EditProfile />;
  } else if (databaseSettings === 1) {
    showSelectedSettings = <AssignAProfile />;
  } else if (databaseSettings === 2) {
    showSelectedSettings = <CreateNewProfile />;
  } else if (databaseSettings === 3) {
    showSelectedSettings = <ProfileStatistics />;
  }

  return (
    <>
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
          <Card style={{ padding: "20px", paddingLeft: "40px" }}>
            {showSelectedSettings}
          </Card>
        </Col>
      </Row>

      <div className="mt-3"></div>

      {(databaseSettings === 0 || databaseSettings === 2) && <SettingsTable />}
    </>
  );
};

export default ProfileSetting;
