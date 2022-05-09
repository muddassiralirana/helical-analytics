import React, { useState } from "react";
import classnames from "classnames";
import { Col, Row, Nav, NavItem, NavLink } from "reactstrap";

const btnData = [
  "Add a Site",
  "Remove / Edit Site",
  "Deidentification Profile",
  "Targets",
  "Push / Download All",
];

const FolderClicked = ({ nextScreenProps, setNextScreen }) => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
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
              Add a Site
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
              Remove / Edit Site
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
              Deidentification Profile
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
              Targets
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
              Push / Download All
            </NavLink>
          </NavItem>
        </Nav>
      </Col>
    </Row>
  );
};

export default FolderClicked;
