import React, { useState } from "react";
import { Button, Col, Input, FormGroup, Label, Row, Card } from "reactstrap";
import Select from "react-select";
import SearchInput from "../../../../components/SearchInput";
import CustomCards from "../../../../components/Common/CustomCards";
import { createNewFolder } from "../../../../store/folder/actions";
import { useDispatch, useSelector } from "react-redux";

const btnData = ["New", "Merge"];

//data for parent folder
const optionGroup = [
  {
    label: "Folders",
    options: [
      { label: "Option 1", value: "Option 1" },
      { label: "Option 2", value: "Option 2" },
      { label: "Option 3", value: "Option 3" },
    ],
  },
];
//data of child folders
let FolderSelected = [];
for (let i = 1; i < 20; i++) {
  FolderSelected.push({ name: `Folder ${i}` });
}

const NewClicked = ({ setNextScreen }) => {
  const dispatch = useDispatch();

  const [btnSelected, setBtnSelected] = useState(0);
  const toggleBtnState = (active) => {
    setBtnSelected(active);
  };

  const [selectedGroup, setSelectedGroup] = useState("");
  const handleSelectGroup = (selectedGroup) => {
    setSelectedGroup(selectedGroup);
  };

  const [searched, setSearched] = useState("");
  const searchHandler = (e) => {
    e.preventDefault();
    setSearched(e.target.value);
  };

  const filteredSearch = FolderSelected.filter((item) =>
    item.name.toLowerCase().includes(searched.toLowerCase())
  );

  //btnSelected = 1 states:
  const [newFolder, setNewFolder] = useState({
    name: "",
    // node: "",
    deidentificationProfileName: null,
  });

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setNewFolder((prev) => ({ ...prev, [name]: value }));
  };

  const createFolder = (e) => {
    e.preventDefault();
    const dataToSend = {
      ...newFolder,
      type:
        newFolder.deidentificationProfileName === "No Action"
          ? "local_folder"
          : "deidentified_folder",
    };
    dispatch(createNewFolder(dataToSend));
  };

  return (
    <>
      <Row>
        <Col>
          <div>
            <button
              onClick={() => setNextScreen("default")}
              style={{ padding: "0", border: 0, background: "none" }}
            >
              <i className="ri-arrow-left-circle-fill ri-3x pointer"></i>
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
              <div className="p-3">
                <div className="p-5">
                  <h4 className="mb-4 text-info">Create new folder</h4>
                  <FormGroup row>
                    <Label className="col-md-2 col-form-label">
                      Enter Folder Name
                    </Label>
                    <Col md={5}>
                      <Input
                        type="text"
                        placeholder="Enter Folder Name"
                        required
                        name="name"
                        value={newFolder.name}
                        onChange={changeHandler}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label className="col-md-2 col-form-label text-danger">
                      Select Node
                    </Label>
                    <Col md={5}>
                      <select
                        className="form-control"
                        name="folderOption"
                        value={newFolder.node}
                        onChange={changeHandler}
                      >
                        <option>Select</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label className="col-md-2 col-form-label">
                      Select De-Identification Profile
                    </Label>
                    <Col md={5}>
                      <select
                        className="form-control"
                        name="deidentificationProfileName"
                        value={newFolder.deidentificationProfileName}
                        onChange={changeHandler}
                      >
                        <option>Select</option>
                        <option>Default</option>
                        <option>User-Name 1</option>
                        <option>No Action</option>
                      </select>
                    </Col>
                  </FormGroup>

                  <Button
                    color="info my-3"
                    style={{ width: "200px" }}
                    onClick={createFolder}
                  >
                    Create
                  </Button>
                </div>
              </div>
            )}

            {btnSelected === 1 && (
              <div className="p-5">
                <h4 className="mb-4 text-info">Select folder</h4>
                <FormGroup row>
                  <Label className="col-md-2 col-form-label">
                    Select De-Identification Profile
                  </Label>
                  <Col md={5}>
                    <select className="form-control">
                      <option>Select</option>
                      <option>Default</option>
                      <option>User-Name 1</option>
                      <option>No Action</option>
                    </select>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label className="col-md-2 col-form-label">
                    Select Event
                  </Label>
                  <Col md={5}>
                    <div className="d-flex justify-content-evenly">
                      <Label check>
                        <Input type="radio" name="radio1" />1 Event
                      </Label>
                      <Label check>
                        <Input type="radio" name="radio1" />
                        All NEW Incoming
                      </Label>
                    </div>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label className="col-md-2 col-form-label">
                    Select a Parent Folder{" "}
                  </Label>
                  <Col md={5}>
                    <Select
                      value={selectedGroup}
                      onChange={handleSelectGroup}
                      options={optionGroup}
                      isClearable={true}
                      placeholder="Parent Folder"
                      classNamePrefix="select2-selection"
                    />
                  </Col>
                </FormGroup>

                <Row>
                  <SearchInput
                    type="text"
                    placeholder="Search"
                    name="search"
                    width="200px"
                    value={searched}
                    onChange={searchHandler}
                  />
                  <Col xl={3}>
                    <div className="ml-5">
                      <h6>Children Folder</h6>
                      <div className="Folder__Scroll">
                        <FormGroup check>
                          <div className="d-flex flex-column">
                            {filteredSearch.map((item) => (
                              <Label check key={item.index}>
                                <Input type="checkbox" /> {item.name}
                              </Label>
                            ))}
                          </div>
                        </FormGroup>
                      </div>
                    </div>
                  </Col>
                </Row>

                <Button color="info my-3" style={{ width: "200px" }}>
                  Merge
                </Button>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default NewClicked;
