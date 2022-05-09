import React, { useState } from "react";
import CustomCards from "../../components/Common/CustomCards";
import { Row, Col, Card } from "reactstrap";
import Trial from "./SettingsOptions/UserAccess/Trial";
import FolderManagement from "./SettingsOptions/UserAccess/FolderManagement";
import Analytics from "./SettingsOptions/UserAccess/Analytics";
import SettingsPage from "./SettingsOptions/UserAccess/SettingsPage";
import CloudSharing from "./SettingsOptions/UserAccess/CloudSharing";
import UserRoles from "./SettingsOptions/UserRoles/UserRoles";
import SearchInput from "../../components/SearchInput";

const userAccessOptions = {
  Settings_Page: "Settings_Page",
  Analytics: "Analytics",
  Folder_Management: "Folder_Management",
  Cloud_Sharing: "Cloud_Sharing",
  Trial: "Trial",
};

const userAccessData = [
  {
    id: userAccessOptions.Settings_Page,
    intent: "Settings Page",
    firstIcon: "ri-settings-2-fill",
  },
  {
    id: userAccessOptions.Analytics,
    intent: "Analytics",
    firstIcon: "ri-line-chart-fill",
  },
  {
    id: userAccessOptions.Folder_Management,
    intent: "Folder Management",
    firstIcon: "ri-folder-settings-fill",
  },
  {
    id: userAccessOptions.Cloud_Sharing,
    intent: "Cloud Sharing",
    firstIcon: "ri-cloud-fill",
  },
  {
    id: userAccessOptions.Trial,
    intent: "Trial",
    firstIcon: "ri-bubble-chart-fill",
  },
];

const UserAccess = () => {
  //for user access
  const [userAccessSettings, setUserAccessSettings] = useState(
    userAccessOptions.Settings_Page
  );

  let showSelectedSettings = () => <></>;
  if (userAccessSettings === userAccessOptions.Trial) {
    showSelectedSettings = <Trial />;
  } else if (userAccessSettings === userAccessOptions.Folder_Management) {
    showSelectedSettings = <FolderManagement />;
  } else if (userAccessSettings === userAccessOptions.Analytics) {
    showSelectedSettings = <Analytics />;
  } else if (userAccessSettings === userAccessOptions.Settings_Page) {
    showSelectedSettings = <SettingsPage />;
  } else if (userAccessSettings === userAccessOptions.Cloud_Sharing) {
    showSelectedSettings = <CloudSharing />;
  }

  //for user roles
  const [userRoles, setUserRoles] = useState(true);

  // change data acc to local and deidentify (when implementing with API)
  const userRolesData = [
    { index: 0, name: "Username 1", role: "Admin" },
    { index: 1, name: "Username 2", role: "Master User" },
    { index: 2, name: "Username 3", role: "Co-ordinator" },
    { index: 3, name: "Username 4", role: "Co-ordinator" },
    { index: 4, name: "Username 5", role: "Master User" },
    { index: 5, name: "Username 6", role: "Co-ordinator" },
  ];

  const [searched, setSearched] = useState("");
  const searchHandler = (e) => {
    e.preventDefault();
    setSearched(e.target.value);
  };

  const filteredSearch = userRolesData.filter((item) =>
    item.name.toLowerCase().includes(searched.toLowerCase())
  );

  return (
    <div>
      {/* Access */}
      <h4 className="text-info">User Access</h4>
      <Row>
        <Col md={3}>
          {userAccessData.map((setting) => (
            <CustomCards
              key={setting.id}
              firstIcon={setting.firstIcon}
              intent={setting.intent}
              onClick={() => setUserAccessSettings(setting.id)}
              clicked={userAccessSettings === setting.id}
            />
          ))}
        </Col>
        <Col md={1}></Col>
        <Col>
          <Card
            style={{ height: "35vh", padding: "20px", paddingLeft: "40px" }}
          >
            {showSelectedSettings}
          </Card>
        </Col>
      </Row>
      {/* Roles */}
      <h4 className="mt-3 text-info">Roles</h4>
      <Row>
        <Col md={3}>
          <SearchInput
            type="text"
            placeholder="Search Users"
            name="search"
            width="230px"
            value={searched}
            onChange={searchHandler}
          />
          <div className="Folder__Scroll mt-3" style={{ width: "250px" }}>
            {filteredSearch.map((item) => (
              <div>
                <li className="Folder__Lists" key={item.index}>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0 pb-0">{item.name}</p>
                  </div>
                  <span className="gray-color small-size">{item.role}</span>
                </li>
              </div>
            ))}
          </div>
        </Col>
        <Col md={1}></Col>
        <Col>
          <Card
            style={{ height: "35vh", padding: "20px", paddingLeft: "40px" }}
          >
            {userRoles !== false && <UserRoles />}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UserAccess;
