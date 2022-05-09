import React from "react";
import { Row, Col, Card, CardBody, Container } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { columns, folders } from "./SettingsTableData";
import cellEditFactory from "react-bootstrap-table2-editor";
const { SearchBar } = Search;

const SettingsTable = () => {
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
                  data={folders}
                  columns={columns}
                  search
                >
                  {(props) => (
                    <div>
                      <SearchBar {...props.searchProps} />
                      <hr />
                      <BootstrapTable
                        {...props.baseProps}
                        cellEdit={cellEditFactory({
                          mode: "click",
                          blurToSave: true,
                        })}
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
    </React.Fragment>
  );
};

export default SettingsTable;
