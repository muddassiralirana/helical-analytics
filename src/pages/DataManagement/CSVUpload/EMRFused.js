import React, { useState } from "react";
import SearchInput from "../../../components/SearchInput";
import {
  Row,
  Col,
  Card,
  Form,
  CardBody,
  CardSubtitle,
  Button,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import CSVReader from "react-csv-reader";
import Select from "react-select";
import { MultiSelect } from "../../../components/MultiSelect";

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

const options = [
  { value: "Option 1", label: "Option 1" },
  { value: "Option 2", label: "Option 2" },
  { value: "Option 3", label: "Option 3" },
];

const EMRFused = () => {
  //for folder selection
  const [folder, setFolder] = useState("");

  //first radio series (select a folder,...)
  const [radio1Selected, setRadio1Selected] = useState("");
  const onValue1Change = (e) => {
    setRadio1Selected(e.target.value);
  };

  //second radio series (join right,...)
  const [radioSelected, setRadioSelected] = useState("JoinRight");
  const onValueChange = (e) => {
    setRadioSelected(e.target.value);
  };

  const [isRunClicked, setRunClicked] = useState(false);
  const [searched, setSearched] = useState("");
  const searchHandler = (e) => {
    e.preventDefault();
    setSearched(e.target.value);
  };
  const filteredSearch = LocalSelected.filter((item) =>
    item.name.toLowerCase().includes(searched.toLowerCase())
  );

  const [csvData, setCsvData] = useState([]);
  const [multiselected, setMultiSelected] = useState([]);
  const [delimiter, setDelimiter] = useState(",");

  //csv reader functions
  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
    delimiter: delimiter,
  };

  const handleForce = (data, fileInfo) => {
    // console.log(data, fileInfo);
    setCsvData(Object.keys(data[0]));
  };

  let csvDataWhole = [];
  csvData.map((obj) => csvDataWhole.push({ label: obj, value: obj }));

  return (
    <Row>
      <Col xs={12}>
        <Card>
          <CardBody>
            <FormGroup check>
              <div className="d-flex flex-column mt-3">
                <Label check>
                  <Input
                    type="radio"
                    name="select1"
                    value="Select a Folder"
                    checked={radio1Selected === "Select a Folder"}
                    onChange={onValue1Change}
                  />
                  Select a Folder
                </Label>
                <Label check>
                  <Input
                    type="radio"
                    name="select1"
                    value="Full Database"
                    checked={radio1Selected === "Full Database"}
                    onChange={onValue1Change}
                  />
                  Full Database
                </Label>
              </div>
            </FormGroup>
            <div className="mt-3"></div>
            {radio1Selected === "Select a Folder" && (
              <Row>
                <Col md={6}>
                  {!folder && (
                    <SearchInput
                      type="text"
                      placeholder="Search"
                      name="search"
                      width="540px"
                      value={searched}
                      onChange={searchHandler}
                    />
                  )}

                  {!folder && (
                    <div className="mt-3 Folder__Scroll">
                      {filteredSearch.map((item) => (
                        <li
                          className="Folder__Lists"
                          key={item.index}
                          onClick={() => {
                            setFolder(item);
                          }}
                        >
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0 pb-0">{item.name}</p>
                            <p className="d-flex align-items-center mb-0 pb-0">
                              {item.number}{" "}
                              <i className="ri-arrow-right-s-line"></i>
                            </p>
                          </div>
                          {item.extra && (
                            <span className="gray-color small-size">
                              {item.extra}
                            </span>
                          )}
                        </li>
                      ))}
                    </div>
                  )}
                </Col>
              </Row>
            )}

            {folder && (
              <Row>
                <Col md={3}>
                  <div className="d-flex justify-content-between align-items-center">
                    <h6>Selected Folder: {folder.name}</h6>
                    <Button onClick={() => setFolder("")}>x</Button>
                  </div>
                </Col>
              </Row>
            )}

            <h4 className="mt-3 text-info">Upload</h4>
            <CardSubtitle className="mb-3">
              Upload your media files here
            </CardSubtitle>

            <Row>
              <Col md={6}>
                <Form>
                  <div className="newDropzone">
                    <div className="dz-message needsclick mt-2">
                      <div className="mb-3">
                        <i className="display-4 text-muted ri-upload-cloud-2-line"></i>
                      </div>
                      <CSVReader
                        cssClass="react-csv-input"
                        onFileLoaded={handleForce}
                        parserOptions={papaparseOptions}
                      />
                      <p style={{ opacity: "0.5", fontSize: "18px" }}>
                        (only csv files)
                      </p>
                    </div>
                  </div>
                </Form>
              </Col>
              <Col md={6}>
                <FormGroup row className="mt-3">
                  <Label className="col-md-3 col-form-label">
                    Enter Delimeted Character <br></br>*( comma by default)
                  </Label>
                  <Col className="col-md-6">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Delimeted Character"
                      value={delimiter}
                      onChange={(e) => setDelimiter(e.target.value)}
                    />
                  </Col>
                </FormGroup>

                {/* multiple select */}
                <MultiSelect
                  options={csvDataWhole}
                  value={multiselected}
                  onChange={setMultiSelected}
                />

                <FormGroup check>
                  <div className="d-flex flex-column mt-3">
                    <Label check>
                      <Input
                        type="radio"
                        name="radio1"
                        value="JoinRight"
                        defaultChecked
                        checked={radioSelected === "JoinRight"}
                        onChange={onValueChange}
                      />
                      Join Right
                    </Label>
                    <Label check>
                      <Input
                        type="radio"
                        name="radio1"
                        value="AppendBelow"
                        checked={radioSelected === "AppendBelow"}
                        onChange={onValueChange}
                      />
                      Append Below
                    </Label>
                    <Label check>
                      <Input
                        type="radio"
                        name="radio1"
                        value="Union"
                        checked={radioSelected === "Union"}
                        onChange={onValueChange}
                      />
                      Union
                    </Label>
                  </div>
                </FormGroup>
                {radioSelected !== "JoinRight" && (
                  <FormGroup check>
                    <div className="d-flex flex-column mt-3">
                      <Label check>
                        <Input type="radio" name="radio2" />
                        Create New Columns - Unmatched Data
                      </Label>
                      <Label check>
                        <Input type="radio" name="radio2" />
                        Ignore Unmatched Columns
                      </Label>
                    </div>
                  </FormGroup>
                )}
              </Col>
            </Row>

            <Row>
              <Col md={{ span: 2, offset: 10 }}>
                {!isRunClicked && (
                  <Button
                    color="info"
                    className="mt-3"
                    size="lg"
                    onClick={() => setRunClicked(true)}
                  >
                    Run
                  </Button>
                )}

                <Button
                  color="info"
                  className="mt-3 ml-3"
                  size="lg"
                  onClick={() => setRunClicked(false)}
                >
                  Startover
                </Button>
              </Col>
            </Row>
            <div className="mt-3"></div>
            <Row>
              {isRunClicked && radioSelected === "JoinRight" && (
                <JoinRight multiselected={multiselected} />
              )}
              {isRunClicked && radioSelected === "AppendBelow" && (
                <AppendBelow multiselected={multiselected} />
              )}
              {isRunClicked && radioSelected === "Union" && (
                <Union multiselected={multiselected} />
              )}
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

const JoinRight = ({ multiselected }) => {
  const [selected, setSelected] = useState({ label: "Select...", value: null });

  const handleChange = (newValue, actionMeta) => {
    // console.log("Label select", newValue, actionMeta);
    setSelected(newValue);
  };

  const handleChange2 = (newValue, actionMeta) => {
    console.log("Database select", newValue, actionMeta);
  };

  return (
    <>
      <Col md={6}>
        <FormGroup row>
          <Label className="col-md-2 col-form-label">Column Label</Label>
          <Col>
            <Select
              value={selected}
              onChange={handleChange}
              options={multiselected}
              classNamePrefix="select2-selection"
            />
          </Col>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup row>
          <Label className="col-md-2 col-form-label">Database Label</Label>
          <Col>
            <Select
              onChange={handleChange2}
              options={options}
              classNamePrefix="select2-selection"
            />
          </Col>
        </FormGroup>
      </Col>
    </>
  );
};

const AppendBelow = ({ multiselected }) => {
  const [selected, setSelected] = useState(
    Array(multiselected.length).fill({ label: "Select...", value: null })
  );
  const handleSelection = (_selected, idx) => {
    const temp = [...selected];
    temp[idx] = _selected;
    setSelected(temp);
  };

  const handleChange = (newValue, actionMeta) => {
    console.log("Database select", newValue, actionMeta);
  };

  return (
    <>
      {selected.map((item, idx) => (
        <>
          <Col md={6}>
            <FormGroup row>
              <Label className="col-md-2 col-form-label">Column Labels</Label>
              <Col>
                <Select
                  value={item}
                  onChange={(_selected) => handleSelection(_selected, idx)}
                  options={multiselected.filter(
                    (option) => !selected.includes(option)
                  )}
                  classNamePrefix="select2-selection"
                />
              </Col>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup row>
              <Label className="col-md-2 col-form-label">Database Labels</Label>
              <Col>
                <Select
                  onChange={handleChange}
                  options={options}
                  classNamePrefix="select2-selection"
                />
              </Col>
            </FormGroup>
          </Col>
        </>
      ))}
    </>
  );
};

const Union = ({ multiselected }) => {
  //common selection
  const [commonSelected, setCommonSelected] = useState({
    label: "Select...",
    value: null,
  });

  const handleCommonChange = (newValue, actionMeta) => {
    // console.log("select", newValue, actionMeta);
    setCommonSelected(newValue);
  };

  //common selection
  const [commonDBSelected, setCommonDBSelected] = useState({
    label: "Select...",
    value: null,
  });

  const handleDBCommonChange = (newValue, actionMeta) => {
    console.log("select", newValue, actionMeta);
    // setCommonDBSelected(newValue);
  };

  const [selected, setSelected] = useState(
    Array(multiselected.length).fill({ label: "Select...", value: null })
  );

  const handleSelection = (_selected, idx) => {
    const temp = [...selected];
    temp[idx] = _selected;
    setSelected(temp);
  };

  const handleChange = (newValue, actionMeta) => {
    console.log("Database select", newValue, actionMeta);
  };

  return (
    <>
      <Col md={6}>
        <FormGroup row>
          <Label className="col-md-2 col-form-label">Common Column Label</Label>
          <Col>
            <Select
              value={commonSelected}
              onChange={handleCommonChange}
              options={multiselected}
              classNamePrefix="select2-selection"
            />
          </Col>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup row>
          <Label className="col-md-2 col-form-label">
            Common Database Label
          </Label>
          <Col>
            <Select
              onChange={handleDBCommonChange}
              options={options}
              classNamePrefix="select2-selection"
            />
          </Col>
        </FormGroup>
      </Col>

      {selected.map((item, idx) => (
        <>
          <Col md={6}>
            <FormGroup row>
              <Label className="col-md-2 col-form-label">Column Labels</Label>
              <Col>
                <Select
                  value={item}
                  onChange={(_selected) => handleSelection(_selected, idx)}
                  options={multiselected.filter(
                    (option) => !selected.includes(option)
                  )}
                  classNamePrefix="select2-selection"
                />
              </Col>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup row>
              <Label className="col-md-2 col-form-label">Database Labels</Label>
              <Col>
                <Select
                  onChange={handleChange}
                  options={options}
                  classNamePrefix="select2-selection"
                />
              </Col>
            </FormGroup>
          </Col>
        </>
      ))}
    </>
  );
};

export default EMRFused;
