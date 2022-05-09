import React, { useState } from "react";
import {
  Col,
  Row,
  Card,
  FormGroup,
  Input,
  Form,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import CustomCards from "../../../../components/Common/CustomCards";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";
import GenerateKeySteps from "../../../../components/GenerateKeySteps";
import {
  columns,
  folders,
  myConnections,
  columnConnection,
} from "./SharedData";

const selectRow = {
  mode: "checkbox",
  clickToSelect: true,
};

const { SearchBar } = Search;

const Shared = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleAcceptedFiles = (files) => {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );

    setSelectedFiles(files);
  };

  /**
   * Formats the size
   */
  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const [btnSelected, setBtnSelected] = useState(null);
  const btnData = ["New Connection", "Receive Connection", "My Connections"];
  const toggleBtnState = (active) => {
    setBtnSelected(active);
  };

  //for modal
  const removeBodyCss = () => {
    document.body.classList.add("no_padding");
  };
  const [modal, setModal] = useState(false);
  const tog = () => {
    setModal((prevState) => !prevState);
    removeBodyCss();
  };

  return (
    <>
      <Row>
        <Col>
          <div>
            <button
              onClick={tog}
              style={{ padding: "0", border: 0, background: "none" }}
            >
              <i className="ri-information-fill ri-2x pointer"></i>
            </button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <div className="d-flex flex-column">
            {btnData.map((item, idx) => (
              <CustomCards
                key={idx}
                intent={item}
                onClick={() => toggleBtnState(idx)}
                clicked={btnSelected === idx}
              />
            ))}
          </div>
        </Col>

        <Col md={9}>
          <Card>
            {btnSelected === 0 && (
              <div className="pl-5 pt-2">
                <h4 className="mb-4 text-info">Create a new connection</h4>
                <h6>1. Add a Site Name:</h6>
                <FormGroup row>
                  <Col md={5}>
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Enter Site Name"
                    />
                  </Col>
                </FormGroup>
                <h6>2. Select a Folder</h6>
                <Col md={5}>
                  <ToolkitProvider
                    keyField="id"
                    bootstrap4
                    data={folders}
                    columns={columns}
                    search
                    selectRow={selectRow}
                  >
                    {(props) => (
                      <div>
                        <SearchBar {...props.searchProps} />
                        <BootstrapTable
                          {...props.baseProps}
                          selectRow={selectRow}
                          wrapperClasses="table-responsive scroll"
                        />
                      </div>
                    )}
                  </ToolkitProvider>
                </Col>
                <Button color="info my-5" style={{ width: "200px" }}>
                  Generate Key
                </Button>
              </div>
            )}

            {btnSelected === 1 && (
              <div className="pl-5 pt-2">
                <h4 className="mb-4 text-info">Receive a connection</h4>
                <h6>1. Enter generated Site Name:</h6>
                <FormGroup row>
                  <Col md={5}>
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Enter Generated Site Name"
                    />
                  </Col>
                </FormGroup>
                <h6>2. Drop a File:</h6>
                <Col>
                  <Form>
                    <Dropzone
                      accept="text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                      onDrop={(acceptedFiles) =>
                        handleAcceptedFiles(acceptedFiles)
                      }
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div className="dropzone">
                          <div
                            className="dz-message needsclick mt-2"
                            {...getRootProps()}
                          >
                            <input {...getInputProps()} />
                            <div className="mb-3">
                              <i className="display-4 text-muted ri-upload-cloud-2-line"></i>
                            </div>
                            <h4>Drop csv files here or click to upload.</h4>
                          </div>
                        </div>
                      )}
                    </Dropzone>
                    <div className="dropzone-previews mt-3" id="file-previews">
                      {selectedFiles.map((f, i) => {
                        return (
                          <Card
                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                            key={i + "-file"}
                          >
                            <div className="p-2">
                              <Row className="align-items-center">
                                <Col className="col-auto">
                                  <img
                                    data-dz-thumbnail=""
                                    height="80"
                                    className="avatar-sm rounded bg-light"
                                    alt={f.name}
                                    src={f.preview}
                                  />
                                </Col>
                                <Col>
                                  <Link
                                    to="#"
                                    className="text-muted font-weight-bold"
                                  >
                                    {f.name}
                                  </Link>
                                  <p className="mb-0">
                                    <strong>{f.formattedSize}</strong>
                                  </p>
                                </Col>
                              </Row>
                            </div>
                          </Card>
                        );
                      })}
                    </div>
                  </Form>

                  <Row>
                    <Button color="info ml-3">Run</Button>
                    <Button color="info ml-3">Save</Button>
                    <Button color="info ml-3">Stop Sharing</Button>
                  </Row>
                </Col>
                <Button color="info my-5" style={{ width: "200px" }}>
                  Merge
                </Button>
              </div>
            )}

            {btnSelected === 2 && (
              <div className="pl-5 pt-2">
                <h4 className="mb-4 text-info">My Connections</h4>
                <Col md={5}>
                  <ToolkitProvider
                    keyField="id"
                    bootstrap4
                    data={myConnections}
                    columns={columnConnection}
                    search
                  >
                    {(props) => (
                      <div>
                        <SearchBar {...props.searchProps} />
                        <BootstrapTable
                          {...props.baseProps}
                          wrapperClasses="table-responsive scroll"
                        />
                      </div>
                    )}
                  </ToolkitProvider>
                </Col>
              </div>
            )}
          </Card>
        </Col>
      </Row>

      <Modal size="sm" isOpen={modal} toggle={tog}>
        <ModalHeader toggle={() => setModal(false)}>
          For connection &amp; site-site Encryption
        </ModalHeader>
        <ModalBody>
          <GenerateKeySteps />
        </ModalBody>
      </Modal>
    </>
  );
};

export default Shared;
