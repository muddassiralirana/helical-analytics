import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import classnames from "classnames";
import EMRFused from "./CSVUpload/EMRFused";

const CSVInput = () => {
  const breadcrumbItems = [
    { title: "Home", link: "/" },
    { title: "Data Management", link: "#" },
    {
      title: "CSV Input",
      link: "#",
    },
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
          <Breadcrumbs title="CSV Input" breadcrumbItems={breadcrumbItems} />

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
                    Averages
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
                    Productivity
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
                    EMR Fused
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
                    Database Upload
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>

          <TabContent activeTab={activeTab}>
            <TabPane tabId="1" className="p-3"></TabPane>
            <TabPane tabId="2" className="p-3"></TabPane>
            <TabPane tabId="3" className="p-3">
              <EMRFused />
            </TabPane>
            <TabPane tabId="4" className="p-3"></TabPane>
          </TabContent>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default CSVInput;
