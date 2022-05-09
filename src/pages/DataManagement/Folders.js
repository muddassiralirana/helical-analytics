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
import Local from "./FoldersOptions/Local/Local";
import classnames from "classnames";
import ReceivedScanFolders from "./FoldersOptions/ReceivedScanFolders/ReceivedScanFolders";
import Merged from "./FoldersOptions/Merged/Merged";
import Shared from "./FoldersOptions/Shared/Shared";
import "./styles.scss";

const Folders = () => {
  const breadcrumbItems = [
    { title: "Home", link: "/" },
    { title: "Data Management", link: "#" },
    { title: "Folders", link: "/datamanagement/folders" },
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
          <Breadcrumbs title="Folders" breadcrumbItems={breadcrumbItems} />
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
                    Local
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
                    De-identified
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
                    Received Scans Folders
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
                    Merged
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={
                      classnames({
                        active: activeTab === "5",
                      })
                      // , "disabled")
                    }
                    onClick={() => {
                      toggle("5");
                    }}
                  >
                    Shared
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1" className="p-3">
            <Local from="Local" />
          </TabPane>
          <TabPane tabId="2" className="p-3">
            <Local from="Deidentified" />
          </TabPane>
          <TabPane tabId="3" className="p-3">
            <ReceivedScanFolders />
          </TabPane>
          <TabPane tabId="4" className="p-3">
            <Merged />
          </TabPane>
          <TabPane tabId="5" className="p-3">
            <Shared />
          </TabPane>
        </TabContent>
      </div>
    </React.Fragment>
  );
};

export default Folders;
