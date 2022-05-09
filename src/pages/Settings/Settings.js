import React, { useState } from "react";
import {
  NavLink,
  NavItem,
  Nav,
  Col,
  Container,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import classnames from "classnames";
import UserAccess from "./UserAccess";
import DatabaseSettings from "./DatabaseSettings";
import PACS from "./PACS";
import DeIdentification from "../Settings/DeIdentification";
import DefaultSettings from "./DefaultSettings";
import SharedFolder from "./SharedFolder";
import MapsVector from "../../components/Maps/MapsVector";

const Settings = () => {
  const breadcrumbItems = [
    { title: "Home", link: "/" },
    { title: "Settings", link: "#" },
  ];

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Settings" breadcrumbItems={breadcrumbItems} />
          <Row>
            <Col>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: activeTab === "1",
                    })}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    User Access
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: activeTab === "2",
                    })}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Database Settings
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: activeTab === "3",
                    })}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    Default Settings
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: activeTab === "4",
                    })}
                    onClick={() => {
                      toggle("4");
                    }}
                  >
                    De-identification Settings
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: activeTab === "5",
                    })}
                    onClick={() => {
                      toggle("5");
                    }}
                  >
                    Shared Folders
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: activeTab === "6",
                    })}
                    onClick={() => {
                      toggle("6");
                    }}
                  >
                    PACS - DICOM Network Setup
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: activeTab === "7",
                    })}
                    onClick={() => {
                      toggle("7");
                    }}
                  >
                    Cloud Settings
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: activeTab === "8",
                    })}
                    onClick={() => {
                      toggle("8");
                    }}
                  >
                    Data Centre Location
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1" className="p-3">
            <UserAccess />
          </TabPane>
          <TabPane tabId="2" className="p-3">
            <DatabaseSettings />
          </TabPane>
          <TabPane tabId="3" className="p-3">
            <DefaultSettings />
          </TabPane>
          <TabPane tabId="4" className="p-3">
            <DeIdentification />
          </TabPane>
          <TabPane tabId="5" className="p-3">
            <SharedFolder />
          </TabPane>
          <TabPane tabId="6" className="p-3">
            <PACS />
          </TabPane>
          <TabPane tabId="8" className="p-3">
            <MapsVector />
          </TabPane>
        </TabContent>
      </div>
    </React.Fragment>
  );
};

export default Settings;
