import React, { useState } from "react";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import {
  Container,
  Row,
  Col,
  NavLink,
  NavItem,
  Nav,
  TabContent,
  TabPane,
} from "reactstrap";

import classnames from "classnames";
import SelectFolders from "./AnalyticsOptions/SelectFolders";
import SearchBarComponent from "./AnalyticsOptions/SearchBarComponent";

const AnalyticsDatatables = () => {
  const breadcrumbItems = [
    { title: "Home", link: "/" },
    { title: "Data Management", link: "#" },
    {
      title: "Analytics & Datatables",
      link: "#",
    },
  ];

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const [subSelected, setSubSelected] = useState([]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs
            title="Analytics &amp; Datatables"
            breadcrumbItems={breadcrumbItems}
          />

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
                    Select Folders
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
                    Search Bar
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>

          <TabContent activeTab={activeTab}>
            <TabPane tabId="1" className="p-3">
              <SelectFolders
                subSelected={subSelected}
                setSubSelected={setSubSelected}
              />
            </TabPane>
            <TabPane tabId="2" className="p-3">
              <SearchBarComponent FoldersSelected={subSelected} />
            </TabPane>
          </TabContent>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AnalyticsDatatables;
