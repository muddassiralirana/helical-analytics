import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { folders, columns } from "./TableComponentData";
import FoldersScanChart from "../../../../components/FoldersScanChart";
import {
  Row,
  Col,
  Card,
  CardBody,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  NavLink,
  Nav,
  Spinner,
} from "reactstrap";
import classnames from "classnames";
import TimeSeriesChart from "../../../../components/TimeSeriesChart";
import { useDispatch, useSelector } from "react-redux";
import { getStudy } from "../../../../store/study/actions";

// functionalities of table
const selectRow = {
  mode: "checkbox",
  clickToSelect: true,
};

const defaultSorted = [
  {
    dataField: "name",
    order: "desc",
  },
];

const { SearchBar } = Search;

const TableComponent = ({ f_id }) => {
  const dispatch = useDispatch();
  const { loading, study, error } = useSelector((state) => state.Study);
  const folderStudy = study?.filter((oneStudy) => oneStudy.folder_id === f_id);

  //for chart modal
  const removeBodyCss = () => {
    document.body.classList.add("no_padding");
  };
  const [modalCenter, setModalCenter] = useState(false);
  const togCenter = () => {
    setModalCenter((prevState) => !prevState);
    removeBodyCss();
  };

  //for modal tabs
  const [customActiveTab, setCustomActiveTab] = useState("1");
  const [selectedChart, setSelectedChart] = useState("patient_mrn");
  const [selectedChartHeading, setSelectedChartHeading] =
    useState("De-identify");
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setCustomActiveTab(tab);
    }
  };

  useEffect(() => {
    dispatch(getStudy());
  }, []);

  if (loading) {
    return (
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Spinner style={{ width: "3rem", height: "3rem" }} />
          </Col>
        </Row>
      </Container>
    );
  }

  if (error) {
    return <h3>Error Fetching Data</h3>;
  }

  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Card>
              <CardBody>
                <ToolkitProvider
                  keyField="id"
                  bootstrap4
                  data={folderStudy}
                  columns={columns}
                  search
                  defaultSorted={defaultSorted}
                  selectRow={selectRow}
                >
                  {(props) => (
                    <div>
                      <div className="d-flex">
                        <SearchBar {...props.searchProps} />

                        <Button
                          type="button"
                          color="primary"
                          className="waves-effect waves-light mb-1 ml-2"
                          onClick={togCenter}
                        >
                          See Chart
                        </Button>
                      </div>

                      <hr />
                      <BootstrapTable
                        {...props.baseProps}
                        defaultSorted={defaultSorted}
                        selectRow={selectRow}
                        wrapperClasses="table-responsive scroll"
                      />
                    </div>
                  )}
                </ToolkitProvider>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal isOpen={modalCenter} toggle={togCenter} centered={true} size="xl">
        <ModalHeader toggle={() => setModalCenter(false)}>
          {selectedChartHeading} Chart
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md={10}>
              {selectedChart !== "patient_age" && selectedChart !== "date" ? (
                <FoldersScanChart
                  name=""
                  height="300"
                  xaxisData={folderStudy.map((item) => item[selectedChart])}
                  yaxisData={folderStudy.map(
                    (item) => item["number_of_series"]
                  )}
                  xaxisTitle={selectedChart}
                  yaxisTitle="number_of_series"
                />
              ) : selectedChart === "date" ? (
                <TimeSeriesChart
                  name="Date of Scan"
                  data={folders}
                  xaxisTitle={selectedChart}
                  yaxisTitle="number_of_series"
                />
              ) : (
                selectedChart === "patient_age" && "wait"
              )}
            </Col>
            <Col md={2}>
              <Nav
                pills
                className="flex-column"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <NavLink
                  id="v-pills-home-tab"
                  style={{ cursor: "pointer" }}
                  className={classnames(
                    {
                      active: customActiveTab === "1",
                    },
                    "mb-2"
                  )}
                  onClick={() => {
                    toggleCustom("1");
                    setSelectedChart("patient_mrn");
                    setSelectedChartHeading("De-identify");
                  }}
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  De-identify
                </NavLink>
                <NavLink
                  id="v-pills-profile-tab"
                  style={{ cursor: "pointer" }}
                  className={classnames(
                    {
                      active: customActiveTab === "2",
                    },
                    "mb-2"
                  )}
                  onClick={() => {
                    toggleCustom("2");
                    setSelectedChart("modality");
                    setSelectedChartHeading("Modality");
                  }}
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Modality
                </NavLink>
                <NavLink
                  id="v-pills-messages-tab"
                  style={{ cursor: "pointer" }}
                  className={classnames(
                    {
                      active: customActiveTab === "3",
                    },
                    "mb-2"
                  )}
                  onClick={() => {
                    toggleCustom("3");
                    setSelectedChart("duration_of_scan");
                    setSelectedChartHeading("Duration of Scan");
                  }}
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Duration of Scan
                </NavLink>
                <NavLink
                  id="v-pills-settings-tab"
                  style={{ cursor: "pointer" }}
                  className={classnames({
                    active: customActiveTab === "4",
                  })}
                  onClick={() => {
                    toggleCustom("4");
                    setSelectedChart("patient_age");
                  }}
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Age
                </NavLink>
                <NavLink
                  id="v-pills-settings-tab"
                  style={{ cursor: "pointer" }}
                  className={classnames({
                    active: customActiveTab === "5",
                  })}
                  onClick={() => {
                    toggleCustom("5");
                    setSelectedChart("date");
                    setSelectedChartHeading("Date of Scan");
                  }}
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Date of Scan
                </NavLink>
              </Nav>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default TableComponent;
