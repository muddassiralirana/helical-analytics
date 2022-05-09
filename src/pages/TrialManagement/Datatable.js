import React, { useState } from "react";
import {
  Col,
  Row,
  NavLink,
  NavItem,
  Nav,
  TabContent,
  TabPane,
} from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import classnames from "classnames";
import FoldersSelection from "./DatatableSubOptions/FoldersSelection";
import Analysis from "./DatatableSubOptions/Analysis";

const Datatable = () => {
  const breadcrumbItems = [
    { title: "Home", link: "/" },
    { title: "Datatable", link: "#" },
  ];

  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const [selectedFolder, setSelectedFolder] = useState(false);

  return (
    <>
      <div className="page-content">
        <Breadcrumbs title="Datatable" breadcrumbItems={breadcrumbItems} />
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
                  Site of Trials
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
                  Analysis
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </div>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1" className="p-3">
          <FoldersSelection
            selectedFolder={selectedFolder}
            setSelectedFolder={setSelectedFolder}
          />
        </TabPane>
        <TabPane tabId="2" className="p-3">
          <Analysis selectedFolder={selectedFolder} />
        </TabPane>
      </TabContent>
    </>
  );
};

export default Datatable;
