import React, { useState } from "react";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  NavLink,
  NavItem,
  Nav,
} from "reactstrap";
import SearchInput from "../../components/SearchInput";
import classnames from "classnames";
import FolderClicked from "./OverviewSubOptions/FolderClicked";

const LocalSelected = [
  { index: 0, name: "Label 1", number: "47", extra: "Shared" },
  { index: 0, name: "Label 2", number: "16" },
  { index: 0, name: "Label", number: "Insert value" },
  { index: 0, name: "Label", number: "Insert value" },
  { index: 0, name: "Label", number: "Insert value" },
  { index: 0, name: "Label", number: "Insert value" },
  { index: 0, name: "Label", number: "Insert value" },
  { index: 0, name: "Label", number: "Insert value" },
  { index: 0, name: "Label", number: "Insert value" },
  { index: 0, name: "Label", number: "Insert value" },
  { index: 0, name: "Label", number: "Insert value" },
  { index: 0, name: "Label", number: "Insert value" },
];

const Overview = () => {
  const breadcrumbItems = [
    { title: "Home", link: "/" },
    { title: "Overview", link: "#" },
  ];

  const [nextScreen, setNextScreen] = useState("default");
  const [nextScreenProps, setNextScreenProps] = useState("");

  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const [searched, setSearched] = useState("");
  const searchHandler = (e) => {
    e.preventDefault();
    setSearched(e.target.value);
  };

  const filteredSearch = LocalSelected?.filter((item) =>
    item.name.toLowerCase().includes(searched.toLowerCase())
  );

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Overview" breadcrumbItems={breadcrumbItems} />
          {nextScreen === "folder" ? (
            <FolderClicked
              nextScreenProps={nextScreenProps}
              setNextScreen={setNextScreen}
            />
          ) : (
            <>
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
                        Start a new trial
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
                        Send Notification / STOP
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
                        DataTable
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
                        Select Date Range
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
              </Row>
              <div className="mt-3"></div>
              <Row>
                <div>
                  <button
                    style={{ padding: "0", border: 0, background: "none" }}
                  >
                    <i className="ri-information-fill ri-2x pointer"></i>
                  </button>
                </div>
              </Row>
              <Card>
                <CardBody>
                  <Row>
                    <Col>
                      <div className="Folder__Scroll">
                        {filteredSearch.map((item) => (
                          <li
                            className="Folder__Lists"
                            onClick={() => {
                              setNextScreenProps(item);
                              setNextScreen("folder");
                            }}
                            key={item.id}
                          >
                            <div className="d-flex justify-content-between align-items-center">
                              <p className="mb-0 pb-0">{item.name}</p>
                              <p className="d-flex align-items-center mb-0 pb-0">
                                {item.total_scans}{" "}
                                <i className="ri-arrow-right-s-line"></i>
                              </p>
                            </div>

                            <span className="gray-color small-size">
                              {item.type}
                            </span>
                          </li>
                        ))}
                      </div>
                    </Col>

                    <Col>
                      <SearchInput
                        type="text"
                        placeholder="Search Site or Trial Name"
                        name="search"
                        width="300px"
                        value={searched}
                        onChange={searchHandler}
                      />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </>
          )}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Overview;
