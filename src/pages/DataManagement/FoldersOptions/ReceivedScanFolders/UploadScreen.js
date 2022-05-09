import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import Select from "react-select";
import {
  Row,
  Col,
  Card,
  Form,
  CardBody,
  CardSubtitle,
  Container,
  Button,
  FormGroup,
  Label,
  Table,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { addFolder } from "../../../../store/folder/actions";

//for datatables list
const folders = [
  {
    id: 1,
    Folders: "First",
  },
  {
    id: 2,
    Folders: "Second",
  },
  {
    id: 3,
    Folders: "Third",
  },
  {
    id: 4,
    Folders: "Label",
  },
  {
    id: 5,
    Folders: "Label",
  },
  {
    id: 7,
    Folders: "Label",
  },
  {
    id: 8,
    Folders: "Label",
  },
  {
    id: 9,
    Folders: "Label",
  },
  {
    id: 10,
    Folders: "Label",
  },
  {
    id: 11,
    Folders: "Label",
  },
  {
    id: 12,
    Folders: "Label",
  },
  {
    id: 13,
    Folders: "Label",
  },
];

const columns1 = [
  {
    dataField: "Folders",
    text: "Folders",
  },
];

const selectRow = {
  mode: "checkbox",
  clickToSelect: true,
};

const { SearchBar } = Search;

const optionGroup = [
  {
    label: "Database Fields",
    options: [
      { label: "Patiend 1", value: "Patiend 1" },
      { label: "Patient 2", value: "Patient 2" },
      { label: "Patient 3", value: "Patient 3" },
    ],
  },
];

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

const UploadScreen = () => {
  //for select selection bar
  const [selected, setSelected] = useState({ label: "Select...", value: null });
  const handleSelection = (selected) => {
    setSelected(selected);
  };

  const dispatch = useDispatch();

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

  useEffect(() => {
    if (selectedFiles.length > 0) {
      const formData = new FormData();
      for (const file of selectedFiles) {
        formData.append("files", file, file.name);
      }
      dispatch(addFolder(formData));
    }
  }, [selectedFiles, dispatch]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Card>
            <CardBody>
              <h4 className="text-info">Upload</h4>
              <CardSubtitle className="mb-3">
                Upload your media files here
              </CardSubtitle>
              <Row>
                <Col md={6}>
                  <Form>
                    <Dropzone
                      onDrop={(acceptedFiles) =>
                        handleAcceptedFiles(acceptedFiles)
                      }
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div className="newDropzone">
                          <div
                            className="dz-message needsclick mt-2"
                            {...getRootProps()}
                          >
                            <input
                              {...getInputProps()}
                              directory=""
                              webkitdirectory=""
                              type="file"
                            />
                            <div className="mb-3">
                              <i className="display-4 text-muted ri-upload-cloud-2-line"></i>
                            </div>
                            <h4>Drop folders here or click to upload.</h4>
                            <p style={{ opacity: "0.5", fontSize: "18px" }}>
                              (upload your folders)
                            </p>
                          </div>
                        </div>
                      )}
                    </Dropzone>
                    <div className="mt-3">
                      <FolderSummary selectedFiles={selectedFiles} />
                    </div>
                  </Form>
                </Col>

                <Col md={6}>
                  <ToolkitProvider
                    keyField="id"
                    bootstrap4
                    data={folders}
                    columns={columns1}
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

                  <FormGroup row className="mt-3">
                    <Label className="col-md-4 col-form-label">
                      Link to Previous Subject <small>(If applicable)</small>
                    </Label>

                    <Col md={3}>
                      <Select
                        value={selected}
                        onChange={handleSelection}
                        options={optionGroup}
                        classNamePrefix="select2-selection"
                      />
                    </Col>
                  </FormGroup>

                  <Button color="info" className="mt-3" size="lg">
                    Run
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

const FolderSummary = ({ selectedFiles }) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let totalSize = [0];
  totalSize.push(...selectedFiles.map((file) => file.size));

  return (
    <>
      <h4 className="card-title mb-3">Folder Summary</h4>
      <div className="table-responsive mt-4 col-6">
        <Table hover className="mb-0 table-centered table-nowrap">
          <tbody>
            <tr>
              <td style={{ width: "20px" }}>
                <div className="avatar-xs">
                  <div className="avatar-title rounded-circle">
                    <i className="ri-file-copy-2-fill"></i>
                  </div>
                </div>
              </td>

              <td>
                <h5 className="font-size-14 mb-0">Total Files</h5>
              </td>

              <td>
                <p className="text-muted mb-0">{selectedFiles.length}</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="avatar-xs">
                  <div className="avatar-title rounded-circle">
                    <i className="ri-folder-5-fill"></i>
                  </div>
                </div>
              </td>
              <td>
                <h5 className="font-size-14 mb-0">Folder Size</h5>
              </td>

              <td>
                <p className="text-muted mb-0">
                  {formatBytes(totalSize?.reduce(reducer))}
                </p>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default UploadScreen;
