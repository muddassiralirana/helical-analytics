import React, { useState } from "react";
import { FormGroup, Label, Col, Button } from "reactstrap";
import Select from "react-select";

const optionGroup = [
  {
    label: "Folders",
    options: [
      { label: "Label 1", value: "Label 1" },
      { label: "Label 2", value: "Label 2" },
      { label: "Cardiac MR", value: "Cardiac MR" },
    ],
  },
];

const AssignAProfile = () => {
  const [selected, setSelected] = useState({
    label: "Select Folders",
    value: null,
  });
  const handleSelection = (selected) => {
    setSelected(selected);
  };
  return (
    <div>
      <FormGroup row>
        <Label className="col-md-4 col-form-label">Select Profile:</Label>
        <Col>
          <select className="form-control">
            <option>Select Profile</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label className="col-md-4 col-form-label">Select Folder:</Label>
        <Col>
          <Select
            value={selected}
            onChange={handleSelection}
            options={optionGroup}
            classNamePrefix="select2-selection"
          />
        </Col>
      </FormGroup>

      <Button
        className="mt-2 Buttons_profile"
        style={{
          width: "20%",
          backgroundColor: "#0075be",
          marginRight: "20px",
        }}
      >
        Save
      </Button>
    </div>
  );
};

export default AssignAProfile;
